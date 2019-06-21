import { ICategory } from '@application/models/i-category';
import { INg2Column } from '@application/models/i-ng2-st-column';

export interface IProject extends ICategory {
	client?: INg2Column | string;
	date: INg2Column | Date;
	name: INg2Column | string;
	state: INg2Column | string;
	status: INg2Column | string;
}
