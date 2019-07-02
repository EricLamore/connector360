// tslint:disable:max-file-line-count no-big-function no-duplicate-string
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICategory } from '@application/models/i-category';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { IInvoiceModel } from '@features/global-reporting/category/models/i-invoice';
import { IProjectModel } from '@features/global-reporting/category/models/i-project';
import { ITicketModel } from '@features/global-reporting/category/models/i-ticket';
import { ITicketDetailModel } from '@features/global-reporting/category/models/i-ticket-detail';
import { InvoiceService } from '@features/global-reporting/category/services/invoice.service';
import { ProjectService } from '@features/global-reporting/category/services/project.service';
import { TicketService } from '@features/global-reporting/category/services/ticket.service';

@Component({
	templateUrl: './global-reporting-category.page.html'
})
export class GlobalReportingCategoryPage implements OnInit {
	public areDataAvailable: boolean;
	public client: string;
	public readonly dateFormat: string = 'dd/MM/yyyy';
	public data: ICategory[];
	public settings: INg2Settings<ICategory>;

	public constructor(
		private readonly _REF: ChangeDetectorRef,
		private readonly _ROUTE: ActivatedRoute,
		private readonly _DATEPIPE: DatePipe,
		private readonly _PROJECT_SERVICE: ProjectService,
		private readonly _INVOICE_SERVICE: InvoiceService,
		private readonly _TICKET_SERVICE: TicketService
	) {}

	public ngOnInit(): void {
		this.areDataAvailable = false;
		if (this._ROUTE.snapshot.paramMap.get('client') == null) {
			this.client = '';
		} else {
			this.client = this._ROUTE.snapshot.paramMap.get('client');
		}
		switch (this._ROUTE.snapshot.paramMap.get('category')) {
			case 'invoices': {
				this.getInvoices().then((invoices: IInvoiceModel[]) => {
					this.addSettingsToInvoices(invoices);
				});
				break;
			}
			case 'projects': {
				this.getProjects().then((projects: IProjectModel[]) => {
					this.addSettingsToProjects(projects);
				});
				break;
			}
			case 'tickets': {
				if (!this.hasClient()) {
					this.getTickets().then((tickets: ITicketModel[]) => {
						this.addSettingsToTickets(tickets);
					});
				} else {
					this.getTicketsByClient().then((clientTickets: ITicketDetailModel[]) => {
						this.addSettingsToClientTickets(clientTickets);
					});
				}
				break;
			}
			default: {
				break;
			}
		}
	}

	public async getInvoices(): Promise<IInvoiceModel[]> {
		return !this.hasClient()
			? this._INVOICE_SERVICE.getInvoices()
			: this._INVOICE_SERVICE.getInvoicesByClient(this.client);
	}

	public addSettingsToInvoices(invoices: IInvoiceModel[]): void {
		this.data = invoices;
		this.settings = {
			actions: false,
			columns: {
				name: {
					title: 'Nom'
				},
				date: {
					title: 'Emission',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
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
		this.areDataAvailable = true;
		this._REF.detectChanges();
	}

	public async getProjects(): Promise<IProjectModel[]> {
		return !this.hasClient()
			? this._PROJECT_SERVICE.getProjects()
			: this._PROJECT_SERVICE.getProjectsByClient(this.client);
	}

	public addSettingsToProjects(projects: IProjectModel[]): void {
		this.data = projects;
		this.settings = {
			actions: false,
			columns: {
				name: {
					title: 'Nom'
				},
				date: {
					title: 'Date de début',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
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
		this.areDataAvailable = true;
		this._REF.detectChanges();
	}

	public async getTickets(): Promise<ITicketModel[]> {
		return this._TICKET_SERVICE.getTickets();
	}

	public addSettingsToTickets(tickets: ITicketModel[]): void {
		this.data = tickets;
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
		this.areDataAvailable = true;
		this._REF.detectChanges();
	}

	public async getTicketsByClient(): Promise<ITicketDetailModel[]> {
		return this._TICKET_SERVICE.getTicketsByClient(this.client);
	}

	public addSettingsToClientTickets(tickets: ITicketDetailModel[]): void {
		this.data = tickets;
		this.settings = {
			actions: false,
			columns: {
				creationDate: {
					title: 'Date de création',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
				},
				closureDate: {
					title: 'Date de clôture',
					valuePrepareFunction: (date: Date): string => {
						return this._DATEPIPE.transform(date, this.dateFormat);
					}
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
		this.areDataAvailable = true;
		this._REF.detectChanges();
	}

	public hasClient(): boolean {
		return this.client !== '';
	}
}
