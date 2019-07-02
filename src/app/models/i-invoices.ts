import InvoicesBarChartColor from '@application/enums/invoices-bar-chart-color';

interface IInvoicesDatasetsModel {
	data: number[];
	label: string;
	backgroundColor: InvoicesBarChartColor;
}

export interface IInvoicesModel {
	labels: string[];
	datasets: IInvoicesDatasetsModel[];
}
