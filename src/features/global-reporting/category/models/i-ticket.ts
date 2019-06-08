import { INg2Column } from '@features/global-reporting/smart-table/models/i-ng2-st-column';
import { ICategory } from './i-category';

export interface ITicket extends ICategory {
	client: INg2Column | string;
	satisfaction: INg2Column | string;
	ticketsNumber: INg2Column | number;
	ticketsOpened: INg2Column | number;
	ticketsClosed: INg2Column | number;
}
