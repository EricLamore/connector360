import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IProjects } from '@features/global-reporting/projects/models/i-projects';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { NbSearchService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-projects-table-client',
	templateUrl: './projects-table-client.component.html'
})
export class ProjectsTableClientComponent implements OnInit {
	@Input() public client: string;
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
		},
		{
			client: 'Assurance Rouge',
			date: this._DATEPIPE.transform('2018-12-10', this.dateFormat),
			name: 'Assurance_rouge_IARD',
			state: 'OK',
			status: 'Recette'
		},
		{
			client: 'xxx',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			name: 'xxx_xx',
			state: 'OK',
			status: 'Production'
		},
		{
			client: 'yyy',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			name: 'yyy_yy',
			state: 'Warning',
			status: 'Recette'
		}
	];
	public source: LocalDataSource = new LocalDataSource(this.data);

	public readonly settings: INg2Settings<IProjects> = {
		actions: false,
		columns: {
			name: {
				title: 'Nom'
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
		hideSubHeader: true,
		noDataMessage: 'Pas de données',
		pager: {
			display: true,
			perPage: 5
		}
	};

	public constructor(private readonly _SEARCHSERVICE: NbSearchService, private readonly _DATEPIPE: DatePipe) {}

	public ngOnInit(): void {
		this.source = new LocalDataSource(this.data);
		this._SEARCHSERVICE.onSearchDeactivate().subscribe((data: { term?: string; tag?: string }) => {
			this.client = '';
			this.updateSmartTable();
		});
		this._SEARCHSERVICE.onSearchSubmit().subscribe((data: { term?: string; tag?: string }) => {
			this.client = data.term;
			this.updateSmartTable();
		});
		this.updateSmartTable();
	}

	public updateSmartTable(): void {
		this.source.setFilter([{ field: 'client', search: this.client }]);
	}
}
