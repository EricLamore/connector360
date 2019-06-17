/* tslint:disable */
import { Component } from '@angular/core';

import { DatePipe } from '@angular/common';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { ChartColor, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

import { Chart, ChartType } from 'chart.js';
import { Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

import { IInvoice } from '@features/global-reporting/category/models/i-invoice';
import { IProject } from '@features/global-reporting/category/models/i-project';

@Component({
	templateUrl: './customer-reporting-dashboard.page.html'
})
export class CustomerReportingDashboardPage {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public invoices: IInvoice[];
	public invoiceSettings: INg2Settings<IInvoice>;
	public projects: IProject[];
	public projectSettings: INg2Settings<IProject>;
	public readonly noData: string = 'Pas de données';
	constructor(private readonly _DATEPIPE: DatePipe) {
		this.buildInvoices();
		this.buildProjects();
	}

	public buildInvoices(): void {
		this.invoices = [
			{
				client: 'Mutuelle Bleue',
				date: this._DATEPIPE.transform('2019-01-20', this.dateFormat),
				name: 'UNV_DEC',
				price: '500,80€',
				status: 'En attente'
			},
			{
				client: 'AFTA',
				date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
				name: 'UNV_DEC',
				price: '80000,56€',
				status: 'Payée'
			},
			{
				client: 'Fin. Brousouf',
				date: this._DATEPIPE.transform('2018-12-16', this.dateFormat),
				name: 'UNIV_DEC',
				price: '5589,18€',
				status: 'Payée'
			},
			{
				client: 'Assurance Rouge',
				date: this._DATEPIPE.transform('2018-12-10', this.dateFormat),
				name: 'UNIV_NOV',
				price: '500,72€',
				status: 'Annulée'
			},
			{
				client: 'xxx',
				date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
				name: 'xxx',
				price: '500€',
				status: 'Annulée'
			},
			{
				client: 'yyy',
				date: this._DATEPIPE.transform('2019-01-02', this.dateFormat),
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
					title: 'Emission'
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
	}

	public buildProjects(): void {
		this.projects = [
			{
				client: 'Mutuelle Bleue',
				date: this._DATEPIPE.transform('2019-01-20', this.dateFormat),
				name: 'Mutuelle_Risk_Business',
				state: 'OK',
				status: 'Production'
			},
			{
				client: 'AFTA',
				date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
				name: 'AFTA_ITALY',
				state: 'Warning',
				status: 'A lancer'
			},
			{
				client: 'Fin. Brousouf',
				date: this._DATEPIPE.transform('2018-12-16', this.dateFormat),
				name: 'Fin.Brousouf_sous_VIE',
				state: 'Danger',
				status: 'Pilote'
			},
			{
				client: 'Assurance Rouge',
				date: this._DATEPIPE.transform('2018-12-10', this.dateFormat),
				name: 'Assurance_rouge_IARD',
				state: 'OK',
				status: 'Recette'
			},
			{
				client: 'xxx',
				date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
				name: 'xxx_xx',
				state: 'OK',
				status: 'Production'
			},
			{
				client: 'yyy',
				date: this._DATEPIPE.transform('2019-01-02', this.dateFormat),
				name: 'yyy_yy',
				state: 'Warning',
				status: 'Recette'
			}
		];
		this.projectSettings = {
			actions: false,
			columns: {
				name: {
					title: 'Nom'
				},
				date: {
					title: 'Début'
				},
				status: {
					title: 'Statut'
				},
				state: {
					title: 'Météo'
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
	}

	public lineChartType: string = 'line';
	public lineChartLegend: boolean = true;
	public lineChartLabels: Label[] = ['Octobre', 'Novembre', 'Décembre', 'Janvier'];
	public lineChartData: ChartDataSets[] = [{ data: [1200000, 1400000, 2200000, 1000000], label: 'Signatures' }];
	public lineChartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	};

	public performanceChartType: ChartType = 'doughnut';
	public performanceChartLegend: boolean = false;
	public performanceChartLabels: Label[] = ['', ''];
	public performanceChartData: MultiDataSet = [[20, 80]];
	public performanceChartMiddleText: string = '-10%';
	public performanceChartOptions: ChartOptions = {
		rotation: Math.PI * 1,
		circumference: Math.PI * 1,
		elements: {
			center: {
				text: this.performanceChartMiddleText,
				fontColor: 'white',
				fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				fontSize: 14,
				fontStyle: 'normal'
			}
		}
	};
	public performanceChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [
		{
			afterDraw(chart) {
				var center = chart.config.options.elements.center;
				if (center) {
					var helpers = Chart.helpers;
					var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
					var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 1.2;

					// @ts-ignore
					var ctx = chart.chart.ctx;
					ctx.save();
					var fontSize = helpers.getValueOrDefault(center.fontSize, Chart.defaults.global.defaultFontSize);
					var fontStyle = helpers.getValueOrDefault(center.fontStyle, Chart.defaults.global.defaultFontStyle);
					var fontFamily = helpers.getValueOrDefault(
						center.fontFamily,
						Chart.defaults.global.defaultFontFamily
					);
					var font = helpers.fontString(fontSize, fontStyle, fontFamily);
					ctx.font = font;
					ctx.fillStyle = helpers.getValueOrDefault(center.fontColor, Chart.defaults.global.defaultFontColor);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText(center.text, centerX, centerY);
					ctx.restore();
				}
			}
		}
	];
	public colors: any = [
		{
			borderColor: 'black',
			backgroundColor: ['purple', 'white']
		}
	];

	public doughnutChartType: ChartType = 'doughnut';
	public dougnnutChartLegend: boolean = false;
	public doughnutChartLabels: Label[] = ['Satisfaction', 'Non satisfaction'];
	public doughnutChartData: MultiDataSet = [[90, 10]];
	public doughnutChartMiddleText: string = '90%';
	public doughnutChartOptions: ChartOptions = {
		elements: {
			center: {
				text: this.doughnutChartMiddleText,
				fontColor: 'white',
				fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				fontSize: 12,
				fontStyle: 'normal'
			}
		}
	};
	public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [
		{
			afterDraw(chart) {
				var center = chart.config.options.elements.center;
				if (center) {
					var helpers = Chart.helpers;
					var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
					var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

					// @ts-ignore
					var ctx = chart.chart.ctx;
					ctx.save();
					var fontSize = helpers.getValueOrDefault(center.fontSize, Chart.defaults.global.defaultFontSize);
					var fontStyle = helpers.getValueOrDefault(center.fontStyle, Chart.defaults.global.defaultFontStyle);
					var fontFamily = helpers.getValueOrDefault(
						center.fontFamily,
						Chart.defaults.global.defaultFontFamily
					);
					var font = helpers.fontString(fontSize, fontStyle, fontFamily);
					ctx.font = font;
					ctx.fillStyle = helpers.getValueOrDefault(center.fontColor, Chart.defaults.global.defaultFontColor);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText(center.text, centerX, centerY);
					ctx.restore();
				}
			}
		}
	];

	public barChartType: ChartType = 'bar';
	public barChartLegend: boolean = false;
	public barChartLabels: Label[] = ['Septembre', 'Octobre', 'Novembre', 'Decembre', 'Janvier'];
	public barChartData: ChartDataSets[] = [
		{ data: [2, 2, 10, 1, 11], label: 'Negatif' },
		{ data: [70, 56, 80, 34, 89], label: 'Positif' }
	];
	public barChartOptions: ChartOptions = {
		maintainAspectRatio: false,
		responsive: true,
		// We use these empty structures as placeholders for dynamic theming.
		scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
		plugins: {
			datalabels: {
				anchor: 'end',
				align: 'end'
			}
		}
	};
}
