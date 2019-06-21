import { ICategory } from '@application/models/i-category';
import { INg2Column } from '@application/models/i-ng2-st-column';

export interface ITicketDetail extends ICategory {
	client?: INg2Column | string;
	closureDate: INg2Column | Date;
	creationDate: INg2Column | Date;
	description: INg2Column | string;
	solvingTime: INg2Column | string;
	status: INg2Column | string;
	topic: INg2Column | string;
}
