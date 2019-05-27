import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '@application/enums/categories';
import { ICategory } from '@application/models/i-category';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { InvoiceService } from '@application/services/invoice.service';
import { ProjectService } from '@application/services/project.service';
import { TicketDetailService } from '@application/services/ticketDetail.service';
import { InvoiceViewModel } from '@application/view-models/invoice-view-model';
import { ProjectViewModel } from '@application/view-models/project-view-model';
import { TicketCustomerDetailViewModel } from '@application/view-models/ticket-customer-detail-view-model';
import { TicketGlobalDetailViewModel } from '@application/view-models/ticket-global-detail-view-model';
import { TranslateService } from '@ngx-translate/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-category-table',
	templateUrl: './category-table.component.html'
})
export class CategoryTableComponent implements OnInit {
	@Input() public category: string;
	@Input() public customerName: string;
	public dataAvailable: boolean;
	public readonly dateFormat: string = 'dd/MM/yyyy';
	@Input() public hasPager: boolean;
	@Input() public hideSubHeader: boolean;
	@Input() public perPage: number;
	public settings: INg2Settings<ICategory>;
	public source: LocalDataSource;

	public constructor(
		private readonly _DATEPIPE: DatePipe,
		private readonly _INVOICE_SERVICE: InvoiceService,
		private readonly _PROJECT_SERVICE: ProjectService,
		private readonly _REF: ChangeDetectorRef,
		private readonly _ROUTE: ActivatedRoute,
		private readonly _TICKET_DETAIL_SERVICE: TicketDetailService,
		private readonly _TRANSLATE_SERVICE: TranslateService
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this.initSettings();
		switch (this.category) {
			case Categories.INVOICES: {
				this.getInvoices().then((invoices: InvoiceViewModel[]) => {
					this._TRANSLATE_SERVICE.get(['category.invoices']).subscribe(() => {
						this.source = new LocalDataSource(invoices);
						this.addInvoiceSettings();
						this.refreshData();
					});
				});
				break;
			}
			case Categories.PROJECTS: {
				this.getProjects().then((projects: ProjectViewModel[]) => {
					this._TRANSLATE_SERVICE.get(['category.projects']).subscribe(() => {
						this.source = new LocalDataSource(projects);
						this.addProjectSettings();
						this.refreshData();
					});
				});
				break;
			}
			case Categories.TICKETS: {
				if (this.customerName) {
					this.getCustomerTickets().then((tickets: TicketCustomerDetailViewModel[]) => {
						this._TRANSLATE_SERVICE.get(['category.tickets']).subscribe(() => {
							this.source = new LocalDataSource(tickets);
							this.addCustomerTicketSettings();
							this.refreshData();
						});
					});
				} else {
					this.getGlobalTickets().then((tickets: TicketGlobalDetailViewModel[]) => {
						this._TRANSLATE_SERVICE.get(['category.tickets']).subscribe(() => {
							this.source = new LocalDataSource(tickets);
							this.addGlobalTicketSettings();
							this.refreshData();
						});
					});
				}
				break;
			}
			default: {
				break;
			}
		}
	}

	public initSettings(): void {
		this.settings = {
			actions: false,
			hideHeader: false,
			hideSubHeader: this.hideSubHeader,
			noDataMessage: this._TRANSLATE_SERVICE.instant('category.noData'),
			pager: {
				display: true,
				perPage: this.perPage
			}
		};
	}

	public async getInvoices(): Promise<InvoiceViewModel[]> {
		return this.customerName
			? this._INVOICE_SERVICE.getInvoicesByClient(this.customerName)
			: this._INVOICE_SERVICE.getInvoices();
	}

	public async getProjects(): Promise<ProjectViewModel[]> {
		return this.customerName
			? this._PROJECT_SERVICE.getProjectsByClient(this.customerName)
			: this._PROJECT_SERVICE.getProjects();
	}

	public async getGlobalTickets(): Promise<TicketGlobalDetailViewModel[]> {
		return this._TICKET_DETAIL_SERVICE.getTicketsDetails();
	}

	public async getCustomerTickets(): Promise<TicketCustomerDetailViewModel[]> {
		return this._TICKET_DETAIL_SERVICE.getTicketsDetailsByClient(this.customerName);
	}

	public addCustomersToSettings(): void {
		this.settings = {
			...this.settings,
			...{
				columns: {
					...{ client: { title: this._TRANSLATE_SERVICE.instant('category.invoices.columns.customer') } },
					...this.settings.columns
				}
			}
		};
	}

	public addInvoiceSettings(): void {
		this.settings = {
			...this.settings,
			...{
				columns: {
					name: { title: this._TRANSLATE_SERVICE.instant('category.invoices.columns.name') },
					date: {
						title: this._TRANSLATE_SERVICE.instant('category.invoices.columns.date'),
						valuePrepareFunction: (date: Date): string => {
							return this._DATEPIPE.transform(date, this.dateFormat);
						}
					},
					status: { title: this._TRANSLATE_SERVICE.instant('category.invoices.columns.status') },
					price: { title: this._TRANSLATE_SERVICE.instant('category.invoices.columns.price') }
				}
			}
		};
		if (!this.customerName) this.addCustomersToSettings();
	}

	public addProjectSettings(): void {
		this.settings = {
			...this.settings,
			...{
				columns: {
					name: { title: this._TRANSLATE_SERVICE.instant('category.projects.columns.name') },
					date: {
						title: this._TRANSLATE_SERVICE.instant('category.projects.columns.date'),
						valuePrepareFunction: (date: Date): string => {
							return this._DATEPIPE.transform(date, this.dateFormat);
						}
					},
					status: { title: this._TRANSLATE_SERVICE.instant('category.projects.columns.status') },
					state: { title: this._TRANSLATE_SERVICE.instant('category.projects.columns.state') }
				}
			}
		};
		if (!this.customerName) this.addCustomersToSettings();
	}

	public addGlobalTicketSettings(): void {
		this.settings = {
			...this.settings,
			...{
				columns: {
					client: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.customer') },
					satisfaction: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.satisfaction') },
					ticketsNumber: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.ticketsNumber') },
					ticketsOpened: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.ticketsOpened') },
					ticketsClosed: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.ticketsClosed') }
				}
			}
		};
	}

	public addCustomerTicketSettings(): void {
		this.settings = {
			...this.settings,
			...{
				columns: {
					createdAt: {
						title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.createdAt'),
						valuePrepareFunction: (date: Date): string => {
							return this._DATEPIPE.transform(date, this.dateFormat);
						}
					},
					closureDate: {
						title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.closureDate'),
						valuePrepareFunction: (date: Date): string => {
							return this._DATEPIPE.transform(date, this.dateFormat);
						}
					},
					subject: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.subject') },
					status: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.status') },
					description: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.description') },
					solvingTime: { title: this._TRANSLATE_SERVICE.instant('category.tickets.columns.solvingTime') }
				}
			}
		};
	}

	public refreshData(): void {
		this.dataAvailable = true;
		this._REF.detectChanges();
	}
}
