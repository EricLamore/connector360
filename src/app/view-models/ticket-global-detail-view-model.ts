import { ITicketGlobalDetailModel } from '@application/models/i-ticket-global-detail';
import { INg2Column } from '../models/i-ng2-st-column';

export class TicketGlobalDetailViewModel implements ITicketGlobalDetailModel {
	public client: INg2Column | string;
	public satisfaction: INg2Column | string;
	public ticketsNumber: INg2Column | number;
	public ticketsOpened: INg2Column | number;
	public ticketsClosed: INg2Column | number;

	public constructor(data?: ITicketGlobalDetailModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: ITicketGlobalDetailModel): void {
		if (typeof data.client !== 'undefined') {
			this.client = data.client;
		}
		if (typeof data.satisfaction !== 'undefined') {
			this.satisfaction = data.satisfaction;
		}
		if (typeof data.ticketsNumber !== 'undefined') {
			this.ticketsNumber = data.ticketsNumber;
		}
		if (typeof data.ticketsOpened !== 'undefined') {
			this.ticketsOpened = data.ticketsOpened;
		}
		if (typeof data.ticketsClosed !== 'undefined') {
			this.ticketsClosed = data.ticketsClosed;
		}
	}
}
