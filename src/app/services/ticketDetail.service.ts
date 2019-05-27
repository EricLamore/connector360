// tslint:disable:prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITicketGlobalDetailModel } from '@application/models/i-ticket-global-detail';
import { Ticket } from '@application/models/universign/ticket';
import { TicketCustomerDetailViewModel } from '@application/view-models/ticket-customer-detail-view-model';
import { TicketGlobalDetailViewModel } from '@application/view-models/ticket-global-detail-view-model';

// TODO: Mocking Global part - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class TicketDetailService {
	public mock: ITicketGlobalDetailModel[] = [
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
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	// TODO : Api Call
	public async getTicketsDetails(): Promise<TicketGlobalDetailViewModel[]> {
		return new Promise<TicketGlobalDetailViewModel[]>(
			(
				resolve: (tickets: TicketGlobalDetailViewModel[]) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				// this._HTTP.get(`${this._url}`).subscribe((res: []) => {
				/* const RES_MOCK: Ticket[] = this.getGlobalTicketsMock(); // replace res
				resolve(this.formatData(RES_MOCK)); */
				resolve(this.formatDataGlobal(this.mock));
				/*},
          (error: HttpErrorResponse) => {
            reject(error);
          }
        );*/
			}
		);
	}

	// TODO : Api Call
	public async getTicketsDetailsByClient(client: string): Promise<TicketCustomerDetailViewModel[]> {
		return new Promise<TicketCustomerDetailViewModel[]>(
			(
				resolve: (tickets: TicketCustomerDetailViewModel[]) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				// this._HTTP.get(`${this._url}/${customerName}`).subscribe((res: []) => {
				const RES_MOCK: Ticket[] = this.getCustomerTicketsMock(); // replace res
				resolve(this.formatDataCustomerTicketsDetails(client, RES_MOCK));
				/*},
          (error: HttpErrorResponse) => {
            reject(error);
          }
        );*/
			}
		);
	}

	public formatDataCustomerTicketsDetails(customerName: string, res: Ticket[]): TicketCustomerDetailViewModel[] {
		const TICKETS_VIEW_MODEL: TicketCustomerDetailViewModel[] = [];
		for (const TICKET of res) {
			const {
				createdAt: CREATED_AT,
				description: DESCRIPTION,
				updatedAt: UPDATE_AT,
				status: STATUS,
				subject: SUBJECT
			}: Ticket = TICKET;
			TICKETS_VIEW_MODEL.push(
				new TicketCustomerDetailViewModel({
					client: customerName,
					createdAt: CREATED_AT,
					closureDate: STATUS === Ticket.StatusEnum.Closed ? UPDATE_AT : null,
					description: DESCRIPTION,
					solvingTime: '',
					status: STATUS,
					subject: SUBJECT
				})
			);
		}
		return TICKETS_VIEW_MODEL;
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatDataGlobal(res: ITicketGlobalDetailModel[]): TicketGlobalDetailViewModel[] {
		const TICKETS_GLOBAL_VIEW_MODEL: TicketGlobalDetailViewModel[] = [];
		for (const TICKET of res) {
			TICKETS_GLOBAL_VIEW_MODEL.push(new TicketGlobalDetailViewModel({ ...TICKET }));
		}
		return TICKETS_GLOBAL_VIEW_MODEL;
	}

	// TODO : Remove this function when the Api connection is done
	public getCustomerTicketsMock(): Ticket[] {
		return [
			{
				createdAt: new Date('2018-08-10'),
				description: 'On the other hand, [...]',
				updatedAt: new Date('2018-08-12'),
				status: Ticket.StatusEnum.Closed,
				subject: "CR-20301 La demande LegalPlace (autonome) vient d'être ajoutée"
			},
			{
				createdAt: new Date('2018-08-10'),
				description: 'and equal blame belongs to those who fail in their duty [...]',
				updatedAt: new Date('2018-08-11'),
				status: Ticket.StatusEnum.Open,
				subject: 'Anomalie'
			},
			{
				createdAt: new Date('2019-06-06'),
				description: '[...]',
				updatedAt: new Date('2018-08-11'),
				status: Ticket.StatusEnum.Open,
				subject: 'Anomalie Page de signature'
			},
			{
				createdAt: new Date('2018-12-31'),
				description: '[...]',
				updatedAt: new Date('2019-01-02'),
				status: Ticket.StatusEnum.Closed,
				subject: 'Anomalie Page de signature'
			}
		];
	}
}
