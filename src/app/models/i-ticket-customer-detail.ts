import { ICategory } from '@application/models/i-category';
import { INg2Column } from '@application/models/i-ng2-st-column';

export interface ITicketCustomerDetailModel extends ICategory {
	client?: INg2Column | string;
	createdAt: INg2Column | Date;
	closureDate?: INg2Column | Date;
	description: INg2Column | string;
	solvingTime: INg2Column | string;
	status: INg2Column | string;
	subject: INg2Column | string;
}
