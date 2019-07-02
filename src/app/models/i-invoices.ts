import InvoicesBarChartColor from '@application/enums/invoices-bar-chart-color';

interface IInvoicesDatasetsModel {
	data: number[];
	label: string;
	backgroundColor: InvoicesBarChartColor;
	hoverBackgroundColor: InvoicesBarChartColor;
}

export interface IInvoicesModel {
	labels: string[];
	datasets: IInvoicesDatasetsModel[];
}
