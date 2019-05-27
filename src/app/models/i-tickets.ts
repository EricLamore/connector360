import { ChartDataSets } from 'chart.js';

export interface ITicketsModel {
	labels: string[];
	datasets: ChartDataSets[];
}
