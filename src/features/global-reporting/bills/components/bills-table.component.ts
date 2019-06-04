import { Component } from '@angular/core';
import { IBillDataModel } from '@features/global-reporting/bills/models/i-bill-data-model';
import { IBillSettingsModel } from '@features/global-reporting/bills/models/i-bill-settings-model';

@Component({
	selector: 'app-bills-table',
	templateUrl: './bills-table.component.html'
})
export class BillsTableComponent {
	public data: IBillDataModel[] = [
		{
			client: 'Mutuelle Bleue',
			name: 'UNV_DEC',
			date: '20/01/2019',
			status: 'En attente',
			price: '500,80€'
		},
		{
			client: 'AFTA',
			name: 'UNV_DEC',
			date: '15/12/2018',
			status: 'Payée',
			price: '80000,56€'
		},
		{
			client: 'Fin. Brousouf',
			name: 'UNIV_DEC',
			date: '15/12/2018',
			status: 'Payée',
			price: '5589,18€'
		},
		{
			client: 'Assurance Rouge',
			name: 'UNIV_NOV',
			date: '10/12/2018',
			status: 'Annulée',
			price: '500,72€'
		},
		{
			client: 'xxx',
			name: 'xxx',
			date: '01/01/2019',
			status: 'Annulée',
			price: '500€'
		},
		{
			client: 'yyy',
			name: 'yyy',
			date: '01/01/2019',
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
}
