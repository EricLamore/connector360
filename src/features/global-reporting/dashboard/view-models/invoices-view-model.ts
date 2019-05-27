import { IInvoicesModel } from '@features/global-reporting/dashboard/models/i-invoices';
import { ChartDataSets } from 'chart.js';

export class InvoicesViewModel implements IInvoicesModel {
	public labels: string[];
	public datasets: ChartDataSets[][];

	public constructor(data?: IInvoicesModel) {
		if (!data) {
			return;
		}

		this.copy(data);
	}

	public copy(data: IInvoicesModel): void {
		if (typeof data.labels !== 'undefined') {
			this.labels = Array.from(data.labels);
		}
		if (typeof data.datasets !== 'undefined') {
			this.datasets = Array.from(data.datasets);
		}
	}
}
