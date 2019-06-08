import { INg2Column } from '@features/global-reporting/smart-table/models/i-ng2-st-column';
import { ICategory } from './i-category';

export interface ITicketDetail extends ICategory {
	client?: INg2Column | string;
	closureDate: INg2Column | string;
	creationDate: INg2Column | string;
	description: INg2Column | string;
	solvingTime: INg2Column | string;
	status: INg2Column | string;
	topic: INg2Column | string;
}
