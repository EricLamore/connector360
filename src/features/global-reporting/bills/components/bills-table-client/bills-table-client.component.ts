import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IBillDataModel } from '@features/global-reporting/bills/models/i-bill-data-model';
import { IBillSettingsModel } from '@features/global-reporting/bills/models/i-bill-settings-model';
import { NbSearchService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-bills-table-client',
	templateUrl: './bills-table-client.component.html'
})
export class BillsTableClientComponent implements OnInit {
	@Input() public client: string;
	public readonly dateFormat: string = 'dd/MM/yyyy';

	public readonly data: IBillDataModel[] = [
		{
			client: 'Mutuelle Bleue',
			name: 'UNV_DEC',
			date: this._DATEPIPE.transform('2019-01-20', this.dateFormat),
			status: 'En attente',
			price: '500,80€'
		},
		{
			client: 'AFTA',
			name: 'UNV_DEC',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			status: 'Payée',
			price: '80000,56€'
		},
		{
			client: 'Fin. Brousouf',
			name: 'UNIV_DEC',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			status: 'Payée',
			price: '5589,18€'
		},
		{
			client: 'Assurance Rouge',
			name: 'UNIV_NOV',
			date: this._DATEPIPE.transform('2018-12-10', this.dateFormat),
			status: 'Annulée',
			price: '500,72€'
		},
		{
			client: 'xxx',
			name: 'xxx',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			status: 'Annulée',
			price: '500€'
		},
		{
			client: 'yyy',
			name: 'yyy',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			status: 'Payée',
			price: '1000€'
		}
	];
	public source: LocalDataSource = new LocalDataSource(this.data);

	public readonly settings: IBillSettingsModel = {
		actions: false,
		columns: {
			name: {
				title: 'Nom'
			},
			date: {
				title: 'Emission'
			},
			status: {
				title: 'Statut'
			},
			price: {
				title: 'Montant'
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
