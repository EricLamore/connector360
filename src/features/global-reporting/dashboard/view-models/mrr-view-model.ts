import { IMrrModel } from '@features/global-reporting/dashboard/models/i-mrr';

export class MrrViewModel implements IMrrModel {
	public data: number[];
	public pointRadius?: number[];
	public label: string;

	public constructor(data?: IMrrModel) {
		if (!data) {
			return;
		}

		this.copy(data);
	}

	public copy(data: IMrrModel): void {
		if (typeof data.data !== 'undefined') {
			this.data = Array.from(data.data);
		}
		if (typeof data.pointRadius !== 'undefined') {
			this.pointRadius = Array.from(data.pointRadius);
		}
		if (typeof data.label !== 'undefined') {
			this.label = data.label;
		}
	}
}
