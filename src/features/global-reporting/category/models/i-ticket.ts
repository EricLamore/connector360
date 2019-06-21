import { ICategory } from '@application/models/i-category';
import { INg2Column } from '@application/models/i-ng2-st-column';

export interface ITicket extends ICategory {
	client: INg2Column | string;
	satisfaction: INg2Column | string;
	ticketsNumber: INg2Column | number;
	ticketsOpened: INg2Column | number;
	ticketsClosed: INg2Column | number;
}
