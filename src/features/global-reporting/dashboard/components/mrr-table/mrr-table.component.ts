import { Component } from '@angular/core';
import { IMRR } from '@features/global-reporting/dashboard/models/i-mrr';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-mrr-table',
	templateUrl: './mrr-table.component.html'
})
export class MRRComponent {
	public data: IMRR[] = [
		{
			name: 'MRR',
			value: '300000 €'
		}
	];
	public readonly source: LocalDataSource = new LocalDataSource(this.data);

	public settings: INg2Settings<IMRR> = {
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
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 3
		}
	};
}
