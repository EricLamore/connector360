// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITicketsModel } from '@application/models/i-tickets';

@Injectable({
	providedIn: 'root'
})
export class TicketsService {
	public mock: ITicketsModel = {
		labels: ['Sept.', 'Oct.', 'Nov.', 'Déc.', 'Janv.'],
		datasets: [
			{ data: [20, 5, 0, 20, 10], label: 'Non résolus' },
			{ data: [300, 250, 100, 280, 100], label: 'Résolus' }
		]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getTickets(): Promise<ITicketsModel> {
		return new Promise<ITicketsModel>(
			(resolve: (tickets: ITicketsModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mock);
			}
		);
	}
}
