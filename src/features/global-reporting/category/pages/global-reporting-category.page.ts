// tslint:disable:max-file-line-count no-big-function no-duplicate-string
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICategory } from '@features/global-reporting/category/models/i-category';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';

@Component({
	templateUrl: './global-reporting-category.page.html'
})
export class GlobalReportingCategoryPage implements OnInit {
	public client: string;
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public data: ICategory[];
	public settings: INg2Settings<ICategory>;

	public constructor(private readonly _ROUTE: ActivatedRoute, private readonly _DATEPIPE: DatePipe) {}

	public ngOnInit(): void {
		if (this._ROUTE.snapshot.paramMap.get('client') == null) {
			this.client = '';
		} else {
			this.client = this._ROUTE.snapshot.paramMap.get('client');
		}
		switch (this._ROUTE.snapshot.paramMap.get('category')) {
			case 'bills': {
				this.buildInvoices();
				break;
			}
			case 'projects': {
				this.buildProjects();
				break;
			}
			case 'tickets': {
				if (!this.hasClient()) {
					this.buildTickets();
				} else {
					this.buildClientTickets();
				}
				break;
			}
			default: {
				break;
			}
		}
	}

	public buildInvoices(): void {
		this.data = [
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
		this.settings = {
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
			hideHeader: false,
			hideSubHeader: false,
			noDataMessage: 'Pas de données',
			pager: {
				display: true,
				perPage: 5
			}
		};
		if (!this.hasClient()) this.settings.columns = { client: { title: 'Client' }, ...this.settings.columns };
	}

	public buildProjects(): void {
		this.data = [
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
		this.settings = {
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
			hideHeader: false,
			hideSubHeader: false,
			noDataMessage: 'Pas de données',
			pager: {
				display: true,
				perPage: 5
			}
		};
		if (!this.hasClient()) this.settings.columns = { client: { title: 'Client' }, ...this.settings.columns };
	}

	public buildTickets(): void {
		this.data = [
			{
				client: 'Mutuelle Bleue',
				satisfaction: '75%',
				ticketsClosed: 19,
				ticketsNumber: 19,
				ticketsOpened: 0
			},
			{
				client: 'AFTA',
				satisfaction: '50%',
				ticketsClosed: 2,
				ticketsNumber: 2,
				ticketsOpened: 0
			},
			{
				client: 'Fin. Brousouf',
				satisfaction: '90%',
				ticketsClosed: 42,
				ticketsNumber: 45,
				ticketsOpened: 3
			},
			{
				client: 'Assurance Rouge',
				satisfaction: '78%',
				ticketsClosed: 17,
				ticketsNumber: 18,
				ticketsOpened: 1
			},
			{
				client: 'xxx',
				satisfaction: '100%',
				ticketsClosed: 10,
				ticketsNumber: 10,
				ticketsOpened: 0
			},
			{
				client: 'yyy',
				satisfaction: '50%',
				ticketsClosed: 2,
				ticketsNumber: 5,
				ticketsOpened: 3
			}
		];
		this.settings = {
			actions: false,
			columns: {
				client: {
					title: 'Client'
				},
				satisfaction: {
					title: 'Satisfaction'
				},
				ticketsNumber: {
					title: 'Tickets'
				},
				ticketsOpened: {
					title: 'Tickets ouverts'
				},
				ticketsClosed: {
					title: 'Tickets clos'
				}
			},
			hideHeader: false,
			hideSubHeader: false,
			noDataMessage: 'Pas de données',
			pager: {
				display: true,
				perPage: 5
			}
		};
	}

	public buildClientTickets(): void {
		this.data = [
			{
				client: 'Mutuelle Bleue',
				closureDate: this._DATEPIPE.transform('2018-08-12', this.dateFormat),
				creationDate: this._DATEPIPE.transform('2018-08-11', this.dateFormat),
				description: 'On the other hand, [...]',
				solvingTime: '2 heures',
				status: 'Clos',
				topic: `CR-20301 La demande LegalPlace (autonome) vient d'être ajoutée`
			},
			{
				client: 'Mutuelle Bleue',
				closureDate: this._DATEPIPE.transform('', this.dateFormat),
				creationDate: this._DATEPIPE.transform('2018-09-19', this.dateFormat),
				description: 'and equal blame belongs to those who fail in their duty [...]',
				solvingTime: 'N/A',
				status: 'Open',
				topic: 'Anomalie Page de signature'
			},
			{
				client: 'Mutuelle Bleue',
				closureDate: this._DATEPIPE.transform('', this.dateFormat),
				creationDate: this._DATEPIPE.transform('2019-06-06', this.dateFormat),
				description: '[...]',
				solvingTime: 'N/A',
				status: 'Open',
				topic: 'Anomalie Page de signature'
			},
			{
				client: 'Mutuelle Bleue',
				closureDate: this._DATEPIPE.transform('2019-01-02', this.dateFormat),
				creationDate: this._DATEPIPE.transform('2018-12-31', this.dateFormat),
				description: '[...]',
				solvingTime: '1 heure',
				status: 'Clos',
				topic: 'Anomalie Page de signature'
			}
		];
		this.settings = {
			actions: false,
			columns: {
				creationDate: {
					title: 'Date de création'
				},
				closureDate: {
					title: 'Date de clôture'
				},
				topic: {
					title: 'Sujet'
				},
				status: {
					title: 'Statut'
				},
				description: {
					title: 'Description'
				},
				solvingTime: {
					title: 'Temps de résolution'
				}
			},
			hideHeader: false,
			hideSubHeader: false,
			noDataMessage: 'Pas de données',
			pager: {
				display: true,
				perPage: 5
			}
		};
	}

	public hasClient(): boolean {
		return this.client !== '';
	}
}
