import { ISimpleTableDataModel } from '@features/global-reporting/simple-table/model/i-simple-table-data-model.component';

export class IBusinessSituationDataModel implements ISimpleTableDataModel {
	public name: string;
	public value: string;
}
