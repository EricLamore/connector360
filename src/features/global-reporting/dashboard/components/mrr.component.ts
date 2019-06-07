import { Component } from '@angular/core';
import { IMRRDataModel } from '@features/global-reporting/dashboard/model/i-mrr-data-model.component';
import { IMRRSettingsModel } from '@features/global-reporting/dashboard/model/i-mrr-settings-model.components';

@Component({
	selector: 'app-mrr-table',
	templateUrl: './mrr.component.html'
})
export class MRRComponent {
	public data: IMRRDataModel[] = [
		{
			name: 'MRR',
			value: '300000 €'
		}
	];

	public settings: IMRRSettingsModel = {
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
