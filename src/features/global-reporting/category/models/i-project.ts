import { INg2Column } from '@features/global-reporting/smart-table/models/i-ng2-st-column';
import { ICategory } from './i-category';

export interface IProject extends ICategory {
	client?: INg2Column | string;
	date: INg2Column | string;
	name: INg2Column | string;
	state: INg2Column | string;
	status: INg2Column | string;
}
