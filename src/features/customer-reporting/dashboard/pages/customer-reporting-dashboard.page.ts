// tslint:disable:no-big-function no-magic-numbers
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { IInvoice } from '@features/customer-reporting/dashboard/models/i-invoice';
import { IProject } from '@features/customer-reporting/dashboard/models/i-project';
import { Chart, ChartColor, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
	templateUrl: './customer-reporting-dashboard.page.html'
})
export class CustomerReportingDashboardPage implements OnInit {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public readonly noData: string = 'Pas de données';
	public invoices: IInvoice[];
	public invoiceSettings: INg2Settings<IInvoice>;
	public performanceChartDataLastMonth: MultiDataSet;
	public performanceChartMiddleTextLastMonth: string;
	public performanceChartDataDeployment: MultiDataSet;
	public performanceChartMiddleTextDeployment: string;
	public projects: IProject[];
	public projectSettings: INg2Settings<IProject>;
	public satisfactionChartData: MultiDataSet;
	public satisfactionChartMiddleText: string;
	public signaturesChartLabels: Label[];
	public signaturesChartData: ChartDataSets[];
	public ticketsChartLabels: Label[];
	public ticketsChartData: ChartDataSets[];

	public constructor(private readonly _DATEPIPE: DatePipe) {}

	public ngOnInit(): void {
		this.performanceChartDataLastMonth = [[25, 75]];
		this.performanceChartMiddleTextLastMonth = '-10%';
		this.performanceChartDataDeployment = [[25, 75]];
		this.performanceChartMiddleTextDeployment = '-20%';
		this.satisfactionChartData = [[90, 10]];
		this.satisfactionChartMiddleText = '90%';
		this.signaturesChartLabels = ['Octobre', 'Novembre', 'Décembre', 'Janvier'];
		this.signaturesChartData = [{ data: [1200, 1300, 2200, 1000], label: 'Signatures' }];
		this.ticketsChartLabels = ['Septembre', 'Octobre', 'Novembre', 'Décembre', 'Janvier'];
		this.ticketsChartData = [
			{ data: [0, 0, 0, 0, 1], label: 'Ouvert' },
			{ data: [0, 0, 0, 0, 2], label: 'En attente' },
			{ data: [2, 0, 0, 1, 1], label: 'Résolus' }
		];

		this.fetchInvoices();
		this.fetchProjects();
	}

	public fetchInvoices(): void {
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

	public fetchProjects(): void {
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
}
