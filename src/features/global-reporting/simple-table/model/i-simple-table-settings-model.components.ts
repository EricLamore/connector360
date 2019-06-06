import { ISimpleTableSettingsColumnsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-columns-model';
import { ISimpleTableSettingsPagerModel } from '@features/global-reporting/simple-table/model/i-simple_table-settings-pager-model';

export interface ISimpleTableSettingsModel {
	actions: boolean;
	columns: ISimpleTableSettingsColumnsModel;
	hideSubHeader: boolean;
	noDataMessage: string;
	pager: ISimpleTableSettingsPagerModel;
}
