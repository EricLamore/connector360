import { ISatisfactionModel } from '@features/customer-reporting/dashboard/models/i-satisfaction';
import { MultiDataSet } from 'ng2-charts';

export class SatisfactionViewModel implements ISatisfactionModel {
	public data: MultiDataSet;
	public text: string;

	public constructor(data?: ISatisfactionModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: ISatisfactionModel): void {
		if (typeof data.data !== 'undefined') {
			this.data = data.data;
		}
		if (typeof data.text !== 'undefined') {
			this.text = data.text;
		}
	}
}
