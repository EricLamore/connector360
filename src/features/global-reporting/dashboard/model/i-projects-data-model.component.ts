import { ISimpleTableDataModel } from '@features/global-reporting/simple-table/model/i-simple-table-data-model.component';

export class IProjectsDataModel implements ISimpleTableDataModel {
	public debut: string;
	public meteo: string;
	public name: string;
	public status: string;
}
