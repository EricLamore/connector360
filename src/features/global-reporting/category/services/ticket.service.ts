// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand no-duplicate-string
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITicketModel } from '@features/global-reporting/category/models/i-ticket';
import { ITicketDetailModel } from '@features/global-reporting/category/models/i-ticket-detail';

@Injectable({
	providedIn: 'root'
})
export class TicketService {
	public mock: ITicketModel[] = [
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

	public mockClient: ITicketDetailModel[] = [
		{
			client: 'Mutuelle Bleue',
			closureDate: new Date('2018-08-12'),
			creationDate: new Date('2018-08-11'),
			description: 'On the other hand, [...]',
			solvingTime: '2 heures',
			status: 'Clos',
			topic: `CR-20301 La demande LegalPlace (autonome) vient d'être ajoutée`
		},
		{
			client: 'Mutuelle Bleue',
			closureDate: new Date(''),
			creationDate: new Date('2018-09-19'),
			description: 'and equal blame belongs to those who fail in their duty [...]',
			solvingTime: 'N/A',
			status: 'Open',
			topic: 'Anomalie Page de signature'
		},
		{
			client: 'Mutuelle Bleue',
			closureDate: new Date(''),
			creationDate: new Date('2019-06-06'),
			description: '[...]',
			solvingTime: 'N/A',
			status: 'Open',
			topic: 'Anomalie Page de signature'
		},
		{
			client: 'Mutuelle Bleue',
			closureDate: new Date('2019-01-02'),
			creationDate: new Date('2018-12-31'),
			description: '[...]',
			solvingTime: '1 heure',
			status: 'Clos',
			topic: 'Anomalie Page de signature'
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getTickets(): Promise<ITicketModel[]> {
		return new Promise<ITicketModel[]>(
			(resolve: (tickets: ITicketModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<ITicketModel>((resolve: (ticket: ITicketModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: ITicketModel) => {
					//resolve(new TicketViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}

	public async getTicketsByClient(client: string): Promise<ITicketDetailModel[]> {
		return new Promise<ITicketDetailModel[]>(
			(resolve: (tickets: ITicketDetailModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mockClient);
			}
		);
	}
}
