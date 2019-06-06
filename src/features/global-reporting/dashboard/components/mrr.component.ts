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
			value: '300000 €'
		}
	];

	public settings: IMRRSettingsModel = {
		actions: false,
		columns: {
			value: {
				title: 'MRR'
			}
		},
		hideSubHeader: true,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 3
		}
	};
}
