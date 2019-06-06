import { ISimpleTableSettingsColumnModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-column-model';
import { ISimpleTableSettingsColumnsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-columns-model';

export class ISynthesisProjectsSettingsColumnsModel implements ISimpleTableSettingsColumnsModel {
	public situation: ISimpleTableSettingsColumnModel;
	public value: ISimpleTableSettingsColumnModel;
}
