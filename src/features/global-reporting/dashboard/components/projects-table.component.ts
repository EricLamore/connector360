import { Component } from '@angular/core';
import { IProjectsDataModel } from '@features/global-reporting/dashboard/model/i-projects-data-model.component';
import { IProjectsSettingsModel } from '@features/global-reporting/dashboard/model/i-projects-settings-model.components';

@Component({
	selector: 'app-projects-simple-table',
	templateUrl: './projects-table.component.html'
})
export class ProjectsSimpleTableComponent {
	public data: IProjectsDataModel[] = [
		{
			name: 'MGC_IARD',
			debut: 'Janv 2017',
			status: 'Recette',
			meteo: 'OK'
		},
		{
			name: 'MGC_VIE',
			debut: 'Mai 2018',
			status: 'En service',
			meteo: 'Warning'
		}
	];

	public settings: IProjectsSettingsModel = {
		actions: false,
		columns: {
			name: {
				title: 'Client'
			},
			debut: {
				title: 'Nom'
			},
			status: {
				title: 'Statut'
			},
			meteo: {
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
