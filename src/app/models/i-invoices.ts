import UniversignColorStates from '@application/enums/universign-color-states';

interface IInvoicesDatasetsModel {
	data: number[];
	label: string;
	backgroundColor: UniversignColorStates;
	hoverBackgroundColor: UniversignColorStates;
}

export interface IInvoicesModel {
	labels: string[];
	datasets: IInvoicesDatasetsModel[];
}
