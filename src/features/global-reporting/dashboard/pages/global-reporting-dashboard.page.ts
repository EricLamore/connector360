// tslint:disable:max-file-line-count no-big-function
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IInvoice } from '@features/global-reporting/category/models/i-invoice';
import { IProject } from '@features/global-reporting/category/models/i-project';
import { IBusinessState } from '@features/global-reporting/dashboard/models/i-business-state';
import { IMRR } from '@features/global-reporting/dashboard/models/i-mrr';
import { IProjectSynthesis } from '@features/global-reporting/dashboard/models/i-project-synthesis';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';

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

	public constructor(private readonly _DATEPIPE: DatePipe) {}

	public ngOnInit(): void {
		this.buildBusinessState();
		this.buildMRR();
		this.buildInvoices();
		this.buildProjectsSynthesis();
		this.buildProjects();
	}

	public buildBusinessState(): void {
		this.businessState = [
			{
				name: 'Consommation',
				value: '300'
			},
			{
				name: 'Pack',
				value: '70'
			},
			{
				name: 'Special',
				value: '10'
			}
		];
		this.businessStateSettings = {
			actions: false,
			columns: {
				name: {
					title: 'Nom'
				},
				value: {
					title: 'Valeur'
				}
			},
			hideHeader: true,
			hideSubHeader: true,
			noDataMessage: this.noData,
			pager: {
				display: true,
				perPage: 3
			}
		};
	}

	public buildMRR(): void {
		this.mrr = [
			{
				name: 'MRR',
				value: '300000 €'
			}
		];
		this.mrrSettings = {
			actions: false,
			columns: {
				name: {
					title: 'Nom'
				},
				value: {
					title: 'Montant'
				}
			},
			hideHeader: true,
			hideSubHeader: true,
			noDataMessage: this.noData,
			pager: {
				display: true,
				perPage: 3
			}
		};
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
				perPage: 2
			}
		};
		this.invoiceSettings.columns = { client: { title: 'Client' }, ...this.invoiceSettings.columns };
	}

	public buildProjectsSynthesis(): void {
		this.projectsSynthesis = [
			{
				situation: 'Recette',
				value: '15'
			},
			{
				situation: 'Production',
				value: '30'
			},
			{
				situation: 'En service',
				value: '300'
			},
			{
				situation: 'Arrêté',
				value: '20'
			}
		];
		this.projectsSynthesisSettings = {
			actions: false,
			columns: {
				situation: {
					title: 'Situation'
				},
				value: {
					title: 'Valeur'
				}
			},
			hideHeader: false,
			hideSubHeader: true,
			noDataMessage: this.noData,
			pager: {
				display: true,
				perPage: 4
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
					title: 'Date de début'
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
				perPage: 2
			}
		};
		this.projectSettings.columns = { client: { title: 'Client' }, ...this.projectSettings.columns };
	}
}
