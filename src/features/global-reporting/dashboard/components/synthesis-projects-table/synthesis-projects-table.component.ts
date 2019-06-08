import { Component } from '@angular/core';
import { ISynthesisProjects } from '@features/global-reporting/dashboard/models/i-synthesis-projects';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-synthesis-projects-table',
	templateUrl: './synthesis-projects-table.component.html'
})
export class SynthesisProjectsComponent {
	public data: ISynthesisProjects[] = [
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
	public readonly source: LocalDataSource = new LocalDataSource(this.data);

	public settings: INg2Settings<ISynthesisProjects> = {
		actions: false,
		columns: {
			situation: {
				title: 'Situation'
			},
			value: {
				title: 'Valeur'
			}
		},
		hideHeader: false,
		hideSubHeader: true,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 4
		}
	};
}
