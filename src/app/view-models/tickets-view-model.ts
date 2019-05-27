import { ITicketsModel } from '@application/models/i-tickets';
import { ChartDataSets } from 'chart.js';

export class TicketsViewModel implements ITicketsModel {
	public labels: string[];
	public datasets: ChartDataSets[];

	public constructor(data?: ITicketsModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: ITicketsModel): void {
		if (typeof data.labels !== 'undefined') {
			this.labels = Array.from(data.labels);
		}
		if (typeof data.datasets !== 'undefined') {
			this.datasets = Array.from(data.datasets);
		}
	}
}
