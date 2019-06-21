// tslint:disable:max-file-line-count no-big-function no-magic-numbers
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { IInvoice } from '@features/global-reporting/category/models/i-invoice';
import { IProject } from '@features/global-reporting/category/models/i-project';
import { IBusinessState } from '@features/global-reporting/dashboard/models/i-business-state';
import { IMRR } from '@features/global-reporting/dashboard/models/i-mrr';
import { IProjectSynthesis } from '@features/global-reporting/dashboard/models/i-project-synthesis';
import { ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
	templateUrl: './global-reporting-dashboard.page.html'
})
export class GlobalReportingDashboardPage implements OnInit {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public invoices: IInvoice[];
	public invoiceSettings: INg2Settings<IInvoice>;
	public businessState: IBusinessState[];
	public businessStateSettings: INg2Settings<IBusinessState>;
	public mrr: IMRR[];
	public mrrSettings: INg2Settings<IMRR>;
	public projectsSynthesis: IProjectSynthesis[];
	public projectsSynthesisSettings: INg2Settings<IProjectSynthesis>;
	public projects: IProject[];
	public projectSettings: INg2Settings<IProject>;
	public readonly noData: string = 'Pas de données';

	public performanceChartData: MultiDataSet;
	public performanceChartMiddleText: string;
	public satisfactionChartData: MultiDataSet;
	public satisfactionChartMiddleText: string;
	public signaturesChartLabels: Label[];
	public signaturesChartData: ChartDataSets[];
	public ticketsChartLabels: Label[];
	public ticketsChartData: ChartDataSets[];

	public constructor(private readonly _DATEPIPE: DatePipe, private readonly _ROUTER: Router) {}

	public ngOnInit(): void {
		this.performanceChartData = [[25, 75]];
		this.performanceChartMiddleText = '-10%';
		this.satisfactionChartData = [[90, 10]];
		this.satisfactionChartMiddleText = '90%';
		this.signaturesChartLabels = ['Octobre', 'Novembre', 'Décembre', 'Janvier'];
		this.signaturesChartData = [{ data: [1200000, 1400000, 2200000, 1000000], label: 'Signatures' }];
		this.ticketsChartLabels = ['Sept.', 'Oct.', 'Nov.', 'Déc.', 'Janv.'];
		this.ticketsChartData = [
			{ data: [20, 5, 0, 20, 10], label: 'Non résolus' },
			{ data: [300, 250, 100, 280, 100], label: 'Résolus' }
		];

		this.buildInvoices();
		this.buildProjects();
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
		this.projects = [
			{
				client: 'Mutuelle Bleue',
				date: new Date('2019-01-20'),
				name: 'Mutuelle_Risk_Business',
				state: 'OK',
				status: 'Production'
			},
			{
				client: 'AFTA',
				date: new Date('2018-12-15'),
				name: 'AFTA_ITALY',
				state: 'Warning',
				status: 'A lancer'
			},
			{
				client: 'Fin. Brousouf',
				date: new Date('2018-12-16'),
				name: 'Fin.Brousouf_sous_VIE',
				state: 'Danger',
				status: 'Pilote'
			},
			{
				client: 'Assurance Rouge',
				date: new Date('2018-12-10'),
				name: 'Assurance_rouge_IARD',
				state: 'OK',
				status: 'Recette'
			},
			{
				client: 'xxx',
				date: new Date('2019-01-01'),
				name: 'xxx_xx',
				state: 'OK',
				status: 'Production'
			},
			{
				client: 'yyy',
				date: new Date('2019-01-02'),
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
					title: 'Début',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
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
		this.projectSettings.columns = { client: { title: 'Client' }, ...this.projectSettings.columns };
	}

	public goToClientInvoices(client: string): void {
		this._ROUTER.navigate([`/global-reporting/invoices/${client}`]);
	}

	public goToClientProjects(client: string): void {
		this._ROUTER.navigate([`/global-reporting/projects/${client}`]);
	}
}
