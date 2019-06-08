// tslint:disable:no-big-function
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICategory } from '@features/global-reporting/category/models/i-category';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';

@Component({
	templateUrl: './global-reporting-category.page.html'
})
export class GlobalReportingCategoryPage implements OnInit {
	public client: string;
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public data: ICategory[];
	public settings: INg2Settings<ICategory>;

	public constructor(private readonly _ROUTE: ActivatedRoute, private readonly _DATEPIPE: DatePipe) {}

	public ngOnInit(): void {
		if (this._ROUTE.snapshot.paramMap.get('client') == null) {
			this.client = '';
		} else {
			this.client = this._ROUTE.snapshot.paramMap.get('client');
		}
		switch (this._ROUTE.snapshot.paramMap.get('category')) {
			case 'bills': {
				this.buildInvoices();
				break;
			}
			case 'projects': {
				this.buildProjects();
				break;
			}
			default: {
				break;
			}
		}
	}

	public buildInvoices(): void {
		this.data = [
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
		this.settings = {
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
			hideSubHeader: false,
			noDataMessage: 'Pas de données',
			pager: {
				display: true,
				perPage: 5
			}
		};
		if (!this.hasClient()) this.settings.columns = { client: { title: 'Client' }, ...this.settings.columns };
	}

	public buildProjects(): void {
		this.data = [
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
		this.settings = {
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
			hideSubHeader: false,
			noDataMessage: 'Pas de données',
			pager: {
				display: true,
				perPage: 5
			}
		};
		if (!this.hasClient()) this.settings.columns = { client: { title: 'Client' }, ...this.settings.columns };
	}

	public hasClient(): boolean {
		return this.client !== '';
	}
}
