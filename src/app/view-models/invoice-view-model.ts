import { IInvoiceModel } from '@application/models/i-invoice';
import { INg2Column } from '@application/models/i-ng2-st-column';

export class InvoiceViewModel implements IInvoiceModel {
	public client: INg2Column | string;
	public date: INg2Column | Date;
	public name: INg2Column | string;
	public price: INg2Column | string;
	public status: INg2Column | string;

	public constructor(data?: IInvoiceModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: IInvoiceModel): void {
		if (typeof data.client !== 'undefined') {
			this.client = data.client;
		}
		if (typeof data.date !== 'undefined') {
			this.date = data.date;
		}
		if (typeof data.name !== 'undefined') {
			this.name = data.name;
		}
		if (typeof data.price !== 'undefined') {
			this.price = data.price;
		}
		if (typeof data.status !== 'undefined') {
			this.status = data.status;
		}
	}
}
