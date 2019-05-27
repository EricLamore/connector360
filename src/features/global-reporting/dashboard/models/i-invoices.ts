import { ChartDataSets } from 'chart.js';

export interface IInvoicesModel {
	labels: string[];
	datasets: ChartDataSets[][];
}
