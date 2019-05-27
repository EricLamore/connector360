import { ISatisfactionModel } from '@features/global-reporting/dashboard/models/i-satisfaction';

export class SatisfactionViewModel implements ISatisfactionModel {
	public y: number;
	public target: number;

	public constructor(data?: ISatisfactionModel) {
		if (!data) {
			return;
		}

		this.copy(data);
	}

	public copy(data: ISatisfactionModel): void {
		if (typeof data.y !== 'undefined') {
			this.y = data.y;
		}
		if (typeof data.target !== 'undefined') {
			this.target = data.target;
		}
	}
}
