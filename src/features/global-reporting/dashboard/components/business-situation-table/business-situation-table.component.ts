import { Component } from '@angular/core';
import { IBusinessSituation } from '@features/global-reporting/dashboard/models/i-business-situation';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-business-situation-table',
	templateUrl: './business-situation-table.component.html'
})
export class BusinessSituationComponent {
	public data: IBusinessSituation[] = [
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
	public readonly source: LocalDataSource = new LocalDataSource(this.data);

	public settings: INg2Settings<IBusinessSituation> = {
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
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 3
		}
	};
}
