import { INg2Column } from '../models/i-ng2-st-column';
import { ITicketCustomerDetailModel } from '../models/i-ticket-customer-detail';

export class TicketCustomerDetailViewModel implements ITicketCustomerDetailModel {
	public client: INg2Column | string;
	public createdAt: INg2Column | Date;
	public closureDate?: INg2Column | Date;
	public description: INg2Column | string;
	public solvingTime: INg2Column | string;
	public status: INg2Column | string;
	public subject: INg2Column | string;

	public constructor(data?: ITicketCustomerDetailModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: ITicketCustomerDetailModel): void {
		if (typeof data.client !== 'undefined') {
			this.client = data.client;
		}
		if (typeof data.closureDate !== 'undefined') {
			this.closureDate = data.closureDate;
		}
		if (typeof data.createdAt !== 'undefined') {
			this.createdAt = data.createdAt;
		}
		if (typeof data.description !== 'undefined') {
			this.description = data.description;
		}
		if (typeof data.solvingTime !== 'undefined') {
			this.solvingTime = data.solvingTime;
		}
		if (typeof data.status !== 'undefined') {
			this.status = data.status;
		}
		if (typeof data.subject !== 'undefined') {
			this.subject = data.subject;
		}
	}
}
