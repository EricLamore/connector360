// tslint:disable:no-big-function
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { IClients } from '@features/search-customers/models/i-clients';

@Component({
	selector: 'app-search-customers-results',
	templateUrl: './search-customers-results.component.html'
})
export class SearchCustomersResultsComponent implements OnInit {
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public clients: IClients[];
	public clientsSettings: INg2Settings<IClients>;
	public cumulatedMRR: number = 10000;
	public readonly noData: string = 'Pas de données';
	@Output() public onNewSearchClick: EventEmitter<string> = new EventEmitter<string>();

	public constructor(private readonly _DATEPIPE: DatePipe) {}

	public ngOnInit(): void {
		this.buildClients();
	}

	public buildClients(): void {
		this.clients = [
			{
				client: 'Mutuelle Bleue',
				indicateur: 'INSATISFAIT',
				secteur: 'MUTUELLE',
				dateMEP: new Date('2015-01-20'),
				am: 'Jean Trim',
				mrr: 200,
				mode: 'Consommation'
			},
			{
				client: 'AFTA',
				indicateur: 'AMBASSADEUR',
				secteur: 'MUTUELLE',
				dateMEP: new Date('2014-12-15'),
				am: 'Jean Renoir',
				mrr: 200,
				mode: 'Consommation'
			},
			{
				client: 'Fin. Brousouf',
				indicateur: 'SATISFAIT',
				secteur: 'MUTUELLE',
				dateMEP: new Date('2017-12-15'),
				am: 'Adam Gramsci',
				mrr: 200,
				mode: 'Consommation'
			},
			{
				client: 'Assurance Rouge',
				indicateur: 'TRES SATISFAIT',
				secteur: 'MUTUELLE',
				dateMEP: new Date('2012-12-10'),
				am: 'Jules Gret',
				mrr: 200,
				mode: 'Pack'
			},
			{
				client: 'xxx',
				indicateur: 'SATISFAIT',
				secteur: 'MUTUELLE',
				dateMEP: new Date('2017-01-15'),
				am: 'Alexis Poncet',
				mrr: 200,
				mode: 'Consommation'
			},
			{
				client: 'yyy',
				indicateur: 'SATISFAIT',
				secteur: 'MUTUELLE',
				dateMEP: new Date('2019-06-18'),
				am: 'Fayçal Benaziz',
				mrr: 200,
				mode: 'Consommation'
			}
		];
		this.clientsSettings = {
			actions: false,
			columns: {
				client: {
					title: 'Client'
				},
				indicateur: {
					title: 'Indicateur'
				},
				secteur: {
					title: 'Secteur'
				},
				dateMEP: {
					title: 'Date MEP',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
				},
				am: {
					title: 'A.M'
				},
				mrr: {
					title: 'MRR'
				},
				mode: {
					title: 'Mode'
				}
			},
			hideHeader: false,
			hideSubHeader: false,
			noDataMessage: this.noData,
			pager: {
				display: true,
				perPage: 5
			}
		};
	}

	public onSubmit(): void {
		this.onNewSearchClick.emit();
	}
}
