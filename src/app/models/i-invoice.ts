import { UniversignColorStates } from '@application/enums/universign-color-states';

export interface IInvoiceModel {
	data: number[];
	label: string;
	backgroundColor: UniversignColorStates;
	hoverBackgroundColor: UniversignColorStates;
}
