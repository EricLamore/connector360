import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IBills } from '@features/global-reporting/bills/models/i-bills';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { NbSearchService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-bills-table-client',
	templateUrl: './bills-table-client.component.html'
})
export class BillsTableClientComponent implements OnInit {
	@Input() public client: string;
	public readonly dateFormat: string = 'dd/MM/yyyy';

	public readonly data: IBills[] = [
		{
			client: 'Mutuelle Bleue',
			date: this._DATEPIPE.transform('2019-01-20', this.dateFormat),
			name: 'UNV_DEC',
			price: '500,80€',
			status: 'En attente'
		},
		{
			client: 'AFTA',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			name: 'UNV_DEC',
			price: '80000,56€',
			status: 'Payée'
		},
		{
			client: 'Fin. Brousouf',
			date: this._DATEPIPE.transform('2018-12-15', this.dateFormat),
			name: 'UNIV_DEC',
			price: '5589,18€',
			status: 'Payée'
		},
		{
			client: 'Assurance Rouge',
			date: this._DATEPIPE.transform('2018-12-10', this.dateFormat),
			name: 'UNIV_NOV',
			price: '500,72€',
			status: 'Annulée'
		},
		{
			client: 'xxx',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			name: 'xxx',
			price: '500€',
			status: 'Annulée'
		},
		{
			client: 'yyy',
			date: this._DATEPIPE.transform('2019-01-01', this.dateFormat),
			name: 'yyy',
			price: '1000€',
			status: 'Payée'
		}
	];
	public source: LocalDataSource = new LocalDataSource(this.data);

	public readonly settings: INg2Settings<IBills> = {
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