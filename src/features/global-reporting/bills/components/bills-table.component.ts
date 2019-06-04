import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IBillDataModel } from '@features/global-reporting/bills/models/i-bill-data-model';
import { IBillSettingsModel } from '@features/global-reporting/bills/models/i-bill-settings-model';

@Component({
	selector: 'app-bills-table',
	templateUrl: './bills-table.component.html'
})
export class BillsTableComponent {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public data: IBillDataModel[] = [
		{
			client: 'Mutuelle Bleue',
			name: 'UNV_DEC',
			date: this._DATEPIPE.transform('2019-01-20', this.dateFormat),
			status: 'En attente',
			price: '500,80€'
		},
		{
			client: 'AFTA',
			name: 'UNV_DEC',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			status: 'Payée',
			price: '80000,56€'
		},
		{
			client: 'Fin. Brousouf',
			name: 'UNIV_DEC',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			status: 'Payée',
			price: '5589,18€'
		},
		{
			client: 'Assurance Rouge',
			name: 'UNIV_NOV',
			date: this._DATEPIPE.transform('2018-12-10', this.dateFormat),
			status: 'Annulée',
			price: '500,72€'
		},
		{
			client: 'xxx',
			name: 'xxx',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			status: 'Annulée',
			price: '500€'
		},
		{
			client: 'yyy',
			name: 'yyy',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			status: 'Payée',
			price: '1000€'
		}
	];

	public settings: IBillSettingsModel = {
		actions: false,
		columns: {
			client: {
				title: 'Client'
			},
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
		hideSubHeader: false,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 5
		}
	};

	public constructor(private readonly _DATEPIPE: DatePipe) {}
}
