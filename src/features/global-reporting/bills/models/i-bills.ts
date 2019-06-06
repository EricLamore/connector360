import { INg2Column } from '@features/global-reporting/smart-table/models/i-ng2-st-column';

export interface IBills {
	client?: INg2Column | string;
	date: INg2Column | string;
	name: INg2Column | string;
	price: INg2Column | string;
	status: INg2Column | string;
}