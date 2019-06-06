import { ISimpleTableDataModel } from '@features/global-reporting/simple-table/model/i-simple-table-data-model.component';

export class ISynthesisProjectsDataModel implements ISimpleTableDataModel {
	public situation: string;
	public value: string;
}
