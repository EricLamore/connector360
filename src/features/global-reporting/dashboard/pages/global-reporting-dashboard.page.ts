// tslint:disable:max-file-line-count no-big-function no-magic-numbers
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { IInvoice } from '@features/global-reporting/category/models/i-invoice';
import { IProject } from '@features/global-reporting/category/models/i-project';
import ProjectsTimelineStates from '@features/global-reporting/dashboard/enums/projects-timeline-states';
import { IBusinessState } from '@features/global-reporting/dashboard/models/i-business-state';
import { IMRR } from '@features/global-reporting/dashboard/models/i-mrr';
import { IProjectSynthesis } from '@features/global-reporting/dashboard/models/i-project-synthesis';
import { ChartDataSets } from 'chart.js';
import * as Highcharts from 'highcharts';
import factory from 'highcharts/modules/bullet';
import Timeline from 'highcharts/modules/timeline';
import { Label, MultiDataSet } from 'ng2-charts';

factory(Highcharts);
Timeline(Highcharts);

@Component({
	templateUrl: './global-reporting-dashboard.page.html'
})
export class GlobalReportingDashboardPage implements OnInit {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public invoices: IInvoice[];
	public invoiceSettings: INg2Settings<IInvoice>;
	public readonly noData: string = 'Pas de données';

	public performanceChartData: MultiDataSet;
	public performanceChartMiddleText: string;
	public signaturesChartLabels: Label[];
	public signaturesChartData: ChartDataSets[];
	public mrrChartLabels: Label[];
	public mrrChartData: ChartDataSets[];
	public ticketsChartLabels: Label[];
	public ticketsChartData: ChartDataSets[];
	public projectsOverviewChartData: ChartDataSets[];

	public constructor(private readonly _DATEPIPE: DatePipe, private readonly _ROUTER: Router) {}

	public ngOnInit(): void {
		this.performanceChartData = [[25, 75]];
		this.performanceChartMiddleText = '-10%';
		this.signaturesChartLabels = ['Octobre', 'Novembre', 'Décembre', 'Janvier'];
		this.signaturesChartData = [{ data: [1200000, 1400000, 2200000, 1000000], label: 'Signatures' }];
		this.mrrChartLabels = [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Décembre'
		];
		const DATA_MRR_PROJECTED: number[] = [];
		const POINT_RADIUS_MRR_PROJECTED: number[] = [];
		for (let i: number = 0; i <= 12; i++) {
			DATA_MRR_PROJECTED.push(300000);
			POINT_RADIUS_MRR_PROJECTED.push(0);
		}
		POINT_RADIUS_MRR_PROJECTED[11] = 3;

		const DATA_MRR_REALISED: number[] = [
			10000,
			20000,
			40000,
			50000,
			70000,
			100000,
			110000,
			160000,
			200000,
			220000,
			250000,
			270000
		];

		this.mrrChartData = [
			{ data: DATA_MRR_PROJECTED, pointRadius: POINT_RADIUS_MRR_PROJECTED, label: 'MRR prévisionnel' },
			{ data: DATA_MRR_REALISED, label: 'MRR réalisé' }
		];
		this.ticketsChartLabels = ['Sept.', 'Oct.', 'Nov.', 'Déc.', 'Janv.'];
		this.ticketsChartData = [
			{ data: [20, 5, 0, 20, 10], label: 'Non résolus' },
			{ data: [300, 250, 100, 280, 100], label: 'Résolus' }
		];
		this.projectsOverviewChartData = [{ data: [15, 30, 300, 20] }];

		this.buildInvoices();
		this.buildProjects();
		this.buildSatisfactions();
	}

	public buildInvoices(): void {
		this.invoices = [
			{
				client: 'Mutuelle Bleue',
				date: new Date('2019-01-20'),
				name: 'UNV_DEC',
				price: '500,80€',
				status: 'En attente'
			},
			{
				client: 'AFTA',
				date: new Date('2018-12-15'),
				name: 'UNV_DEC',
				price: '80000,56€',
				status: 'Payée'
			},
			{
				client: 'Fin. Brousouf',
				date: new Date('2018-12-16'),
				name: 'UNIV_DEC',
				price: '5589,18€',
				status: 'Payée'
			},
			{
				client: 'Assurance Rouge',
				date: new Date('2018-12-10'),
				name: 'UNIV_NOV',
				price: '500,72€',
				status: 'Annulée'
			},
			{
				client: 'xxx',
				date: new Date('2019-01-01'),
				name: 'xxx',
				price: '500€',
				status: 'Annulée'
			},
			{
				client: 'yyy',
				date: new Date('2019-01-02'),
				name: 'yyy',
				price: '1000€',
				status: 'Payée'
			}
		];
		this.invoiceSettings = {
			actions: false,
			columns: {
				name: {
					title: 'Nom'
				},
				date: {
					title: 'Emission',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
				},
				status: {
					title: 'Statut'
				},
				price: {
					title: 'Montant'
				}
			},
			hideHeader: false,
			hideSubHeader: true,
			noDataMessage: this.noData,
			pager: {
				display: true,
				perPage: 1
			}
		};
		this.invoiceSettings.columns = { client: { title: 'Client' }, ...this.invoiceSettings.columns };
	}

	public buildProjects(): void {
		Highcharts.chart('app-projects-chart', {
			chart: {
				zoomType: 'x',
				type: 'timeline',
				scrollablePlotArea: {
					minWidth: 800,
					scrollPositionX: 1
				},
				marginRight: 0,
				marginLeft: 10
			},
			title: {
				text: 'Timeline'
			},
			xAxis: {
				type: 'datetime',
				visible: true
			},
			yAxis: {
				gridLineWidth: 1,
				title: null,
				labels: {
					enabled: false
				}
			},
			tooltip: {
				style: {
					width: 300
				}
			},
			credits: {
				enabled: false
			},
			series: [
				{
					dataLabels: {
						allowOverlap: false,
						width: 50,
						format: '<span style="font-weight: bold;" > {point.x:%d %b %Y}</span><br/>{point.label}'
					},
					type: undefined,
					marker: {
						symbol: 'circle'
					},
					data: [
						{
							x: Date.UTC(2018, 11, 10),
							name: 'Assurance rouge IARD',
							label: 'Assurance rouge IARD',
							description: 'Assurance Rouge',
							color: ProjectsTimelineStates.RISKS,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.RISKS,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.RISKS
							}
						},
						{
							x: Date.UTC(2018, 11, 15),
							name: 'AFTA ITALY',
							label: 'AFTA ITALY',
							description: 'AFTA',
							color: ProjectsTimelineStates.WARNING,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.WARNING,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.WARNING
							}
						},
						{
							x: Date.UTC(2018, 11, 16),
							name: 'Fin.Brousouf sous VIE',
							label: 'Fin.Brousouf sous VIE',
							description: 'Fin. Brousouf',
							color: ProjectsTimelineStates.RISKS,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.RISKS,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.RISKS
							}
						},
						{
							x: Date.UTC(2019, 0, 1),
							name: 'xxx xx',
							label: 'xxx xx',
							description: 'xxx',
							color: ProjectsTimelineStates.OK,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.OK,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.OK
							}
						},
						{
							x: Date.UTC(2019, 0, 2),
							name: 'yyy yy',
							label: 'yyy yy',
							description: 'yyy',
							color: ProjectsTimelineStates.DIFFICULTIES,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.DIFFICULTIES,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.DIFFICULTIES
							}
						},
						{
							x: Date.UTC(2019, 0, 20),
							name: 'Mutuelle Risk Business',
							label: 'Mutuelle Risk Business',
							description: 'Mutuelle Bleue',
							color: ProjectsTimelineStates.OK,
							dataLabels: {
								color: 'black',
								borderColor: 'black',
								backgroundColor: ProjectsTimelineStates.OK,
								connectorWidth: 2,
								connectorColor: ProjectsTimelineStates.OK
							}
						}
					]
				}
			]
		});
	}

	public buildSatisfactions(): void {
		Highcharts.chart('app-satisfaction-chart', {
			chart: {
				inverted: true,
				type: 'bullet',
				height: 115
			},
			title: {
				text: null
			},
			legend: {
				enabled: false
			},
			xAxis: {
				categories: ['<span class="hc-cat-title"></span><br/>']
			},
			plotOptions: {
				series: {
					borderWidth: 0,
					color: '#000'
				},
				bullet: {
					pointPadding: 0.25,
					targetOptions: {
						width: '200%'
					}
				}
			},
			yAxis: {
				gridLineWidth: 1,
				plotBands: [
					{
						from: 0,
						to: 50,
						color: ProjectsTimelineStates.RISKS
					},
					{
						from: 50,
						to: 75,
						color: ProjectsTimelineStates.DIFFICULTIES
					},
					{
						from: 75,
						to: 90,
						color: ProjectsTimelineStates.WARNING
					},
					{
						from: 90,
						to: 100,
						color: ProjectsTimelineStates.OK
					}
				],
				title: {
					text: 'Satisfaction'
				}
			},
			tooltip: {
				pointFormat: '<b>{point.y}</b> (with target at {point.target})'
			},
			credits: {
				enabled: false
			},
			series: [
				{
					type: undefined,
					data: [
						{
							y: 90,
							target: 95
						}
					]
				}
			]
		});
	}

	public goToClientInvoices(client: string): void {
		this._ROUTER.navigate([`/global-reporting/invoices/${client}`]);
	}

	public goToClientProjects(client: string): void {
		this._ROUTER.navigate([`/global-reporting/projects/${client}`]);
	}
}
