import { Component } from '@angular/core';
import { IBusinessSituationDataModel } from '@features/global-reporting/dashboard/model/i-business-situation-data-model.component';
import { IBusinessSituationSettingsModel } from '@features/global-reporting/dashboard/model/i-business-situation-settings-model.components';

@Component({
	selector: 'app-business-situation-table',
	templateUrl: './business-situation.component.html'
})
export class BusinessSituationComponent {
	public data: IBusinessSituationDataModel[] = [
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

	public settings: IBusinessSituationSettingsModel = {
		actions: false,
		columns: {
			name: {
				title: 'Nom'
			},
			value: {
				title: 'Valeur'
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
