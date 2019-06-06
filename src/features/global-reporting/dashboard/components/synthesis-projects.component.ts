import { Component } from '@angular/core';
import { ISynthesisProjectsDataModel } from '@features/global-reporting/dashboard/model/i-synthesis-projects-data-model.component';
import { ISynthesisProjectsSettingsModel } from '@features/global-reporting/dashboard/model/i-synthesis-projects-settings-model.components';

@Component({
	selector: 'app-synthesis-projects-table',
	templateUrl: './synthesis-projects.component.html'
})
export class SynthesisProjectsComponent {
	public data: ISynthesisProjectsDataModel[] = [
		{
			situation: 'Recette',
			value: '15'
		},
		{
			situation: 'Production',
			value: '30'
		},
		{
			situation: 'En service',
			value: '300'
		},
		{
			situation: 'Arrêté',
			value: '20'
		}
	];

	public settings: ISynthesisProjectsSettingsModel = {
		actions: false,
		columns: {
			situation: {
				title: 'Situation'
			},
			value: {
				title: 'Valeur'
			}
		},
		hideSubHeader: true,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 4
		}
	};
}
