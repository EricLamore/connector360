// tslint:disable:no-big-function no-magic-numbers
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { IInvoice } from '@features/customer-reporting/dashboard/models/i-invoice';
import { IProject } from '@features/customer-reporting/dashboard/models/i-project';
import { Chart } from 'chart.js';
import { MultiDataSet } from 'ng2-charts';

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

	public customerName: string;

	public constructor(private readonly _DATEPIPE: DatePipe, private readonly _ROUTE: ActivatedRoute) {}

	public ngOnInit(): void {
		this._ROUTE.paramMap.subscribe((params: ParamMap) => {
			this.customerName = params.get('customerName');
			this.performanceChartDataLastMonth = [[25, 75]];
			this.performanceChartMiddleTextLastMonth = '-10%';
			this.performanceChartDataDeployment = [[25, 75]];
			this.performanceChartMiddleTextDeployment = '-20%';
			this.satisfactionChartData = [[90, 10]];
			this.satisfactionChartMiddleText = '90%';

			this.fetchInvoices();
			this.fetchProjects();
		});
	}

	public fetchInvoices(): void {
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
	}

	public fetchProjects(): void {
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
	}
}
