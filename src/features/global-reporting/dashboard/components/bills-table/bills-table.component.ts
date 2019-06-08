import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IBills } from '@features/global-reporting/category/models/i-bills';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-bills-simple-table',
	templateUrl: './bills-table.component.html'
})
export class BillsSimpleTableComponent {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public readonly data: IBills[] = [
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
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			name: 'UNIV_DEC',
			price: '5589,18€',
			status: 'Payée'
		}
	];
	public readonly source: LocalDataSource = new LocalDataSource(this.data);

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
		hideHeader: false,
		hideSubHeader: true,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 2
		}
	};

	public constructor(private readonly _DATEPIPE: DatePipe) {}
}
