// tslint:disable:no-magic-numbers no-identical-functions no-big-function
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '@application/models/universign/ticket';
import { MonthService } from '@application/services/month.service';
import { TicketsViewModel } from '@application/view-models/tickets-view-model';
import { TranslateService } from '@ngx-translate/core';
import { ChartDataSets } from 'chart.js';

@Injectable({
	providedIn: 'root'
})
export class TicketService {
	private readonly _url: string = '@/';

	public constructor(
		private readonly _HTTP: HttpClient,
		private readonly _MONTH_SERVICE: MonthService,
		private readonly _TRANSLATE_SERVICE: TranslateService
	) {}

	// TODO : Api Call
	public async getTickets(): Promise<TicketsViewModel> {
		return new Promise<TicketsViewModel>(
			(resolve: (products: TicketsViewModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				// this._HTTP.get(`${this._url}`).subscribe((res: []) => {
				const RES_MOCK: Ticket[] = this.getTicketsMock(); // replace res
				this._TRANSLATE_SERVICE.get(['months']).subscribe(() => {
					resolve(this.formatData(RES_MOCK));
				});
				/*},
					(error: HttpErrorResponse) => {
						reject(error);
					}
				);*/
			}
		);
	}

	// TODO : Api Call
	public async getTicketsByClient(customerName: string): Promise<TicketsViewModel> {
		return new Promise<TicketsViewModel>(
			(resolve: (products: TicketsViewModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				// this._HTTP.get(`${this._url}/${customerName}`).subscribe((res: []) => {
				const RES_MOCK: Ticket[] = this.getTicketsMock(); // replace res
				this._TRANSLATE_SERVICE.get(['months']).subscribe(() => {
					resolve(this.formatData(RES_MOCK));
				});
				/*},
					(error: HttpErrorResponse) => {
						reject(error);
					}
				);*/
			}
		);
	}

	public formatData(res: Ticket[]): TicketsViewModel {
		const NB_MONTHS: number = 3;
		const MONTHS: number[] = this._MONTH_SERVICE.getLastMonthsNumber(NB_MONTHS);

		const LABELS: string[] = [...this._MONTH_SERVICE.getSectionOfMonths(NB_MONTHS)];

		const DATASETS: ChartDataSets[] = [];
		DATASETS.push(
			this.getNbTicketByMonthAndTypes(
				res,
				MONTHS,
				[Ticket.StatusEnum.New, Ticket.StatusEnum.Open, Ticket.StatusEnum.Pending, Ticket.StatusEnum.Hold],
				this._TRANSLATE_SERVICE.instant('ticket.state.notSolved')
			)
		);
		DATASETS.push(
			this.getNbTicketByMonthAndTypes(
				res,
				MONTHS,
				[Ticket.StatusEnum.Closed, Ticket.StatusEnum.Solved, Ticket.StatusEnum.Deleted],
				this._TRANSLATE_SERVICE.instant('ticket.state.solved')
			)
		);
		return new TicketsViewModel({ labels: LABELS, datasets: DATASETS });
	}

	public getNbTicketByMonthAndTypes(
		res: Ticket[],
		months: number[],
		types: Ticket.StatusEnum[],
		label: string
	): ChartDataSets {
		const DATA: number[] = [];
		for (const MONTH of months) {
			DATA.push(
				res.filter((ticket: Ticket) => ticket.createdAt.getMonth() === MONTH && types.includes(ticket.status))
					.length
			);
		}

		return { data: DATA, label };
	}

	// TODO : Remove this function when the Api connection is done
	public getTicketsMock(): Ticket[] {
		return [
			{
				createdAt: new Date(2019, 5, 1),
				id: 8,
				status: Ticket.StatusEnum.Hold
			},
			{
				createdAt: new Date(2019, 5, 2),
				id: 9,
				status: Ticket.StatusEnum.Deleted
			},
			{
				createdAt: new Date(2019, 5, 3),
				id: 10,
				status: Ticket.StatusEnum.Deleted
			},
			{
				createdAt: new Date(2019, 6, 1),
				id: 11,
				status: Ticket.StatusEnum.Closed
			},
			{
				createdAt: new Date(2019, 6, 2),
				id: 12,
				status: Ticket.StatusEnum.Closed
			},
			{
				createdAt: new Date(2019, 6, 3),
				id: 13,
				status: Ticket.StatusEnum.Closed
			},
			{
				createdAt: new Date(2019, 6, 4),
				id: 14,
				status: Ticket.StatusEnum.Pending
			},
			{
				createdAt: new Date(2019, 6, 5),
				id: 15,
				status: Ticket.StatusEnum.Solved
			},
			{
				createdAt: new Date(2019, 6, 6),
				id: 16,
				status: Ticket.StatusEnum.Pending
			},
			{
				createdAt: new Date(2019, 6, 7),
				id: 17,
				status: Ticket.StatusEnum.Solved
			},
			{
				createdAt: new Date(2019, 6, 8),
				id: 18,
				status: Ticket.StatusEnum.Deleted
			},
			{
				createdAt: new Date(2019, 7, 1),
				id: 19,
				status: Ticket.StatusEnum.New
			},
			{
				createdAt: new Date(2019, 7, 2),
				id: 20,
				status: Ticket.StatusEnum.New
			},
			{
				createdAt: new Date(2019, 7, 3),
				id: 21,
				status: Ticket.StatusEnum.Closed
			},
			{
				createdAt: new Date(2019, 7, 4),
				id: 22,
				status: Ticket.StatusEnum.Closed
			},
			{
				createdAt: new Date(2019, 7, 5),
				id: 23,
				status: Ticket.StatusEnum.Solved
			},
			{
				createdAt: new Date(2019, 7, 1),
				id: 24,
				status: Ticket.StatusEnum.Solved
			}
		];
	}
}
