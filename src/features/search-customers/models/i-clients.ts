import { ICategory } from '@application/models/i-category';
import { INg2Column } from '@application/models/i-ng2-st-column';

export interface IClients extends ICategory {
	client: INg2Column | string;
	indicateur: INg2Column | string;
	secteur: INg2Column | string;
	dateMEP: INg2Column | Date;
	am: INg2Column | string;
	mrr: INg2Column | number;
	mode: INg2Column | string;
}
