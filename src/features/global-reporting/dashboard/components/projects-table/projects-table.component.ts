import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IProjects } from '@features/global-reporting/category/models/i-projects';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-projects-simple-table',
	templateUrl: './projects-table.component.html'
})
export class ProjectsSimpleTableComponent {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public readonly data: IProjects[] = [
		{
			client: 'Mutuelle Bleue',
			date: this._DATEPIPE.transform('2019-01-20', this.dateFormat),
			name: 'Mutuelle_Risk_Business',
			state: 'OK',
			status: 'Production'
		},
		{
			client: 'AFTA',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			name: 'AFTA_ITALY',
			state: 'Warning',
			status: 'A lancer'
		},
		{
			client: 'Fin. Brousouf',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			name: 'Fin.Brousouf_sous_VIE',
			state: 'Danger',
			status: 'Pilote'
		}
	];
	public readonly source: LocalDataSource = new LocalDataSource(this.data);

	public settings: INg2Settings<IProjects> = {
		actions: false,
		columns: {
			name: {
				title: 'Nom'
			},
			client: {
				title: 'Client'
			},
			date: {
				title: 'Date de début'
			},
			status: {
				title: 'Statut'
			},
			state: {
				title: 'Météo'
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
