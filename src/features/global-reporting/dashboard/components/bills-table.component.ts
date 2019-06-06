import { Component } from '@angular/core';
import { IBills } from '@features/global-reporting/bills/models/i-bills';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';

@Component({
	selector: 'app-bills-simple-table',
	templateUrl: './bills-table.component.html'
})
export class BillsSimpleTableComponent {
	public data: IBills[] = [
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
		}
	];

	public settings: INg2Settings<IBills> = {
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
		hideSubHeader: true,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 2
		}
	};
}
