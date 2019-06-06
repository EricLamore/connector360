import { ISimpleTableSettingsColumnModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-column-model';
import { ISimpleTableSettingsColumnsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-columns-model';

export class IMRRSettingsColumnsModel implements ISimpleTableSettingsColumnsModel {
	public value: ISimpleTableSettingsColumnModel;
}
