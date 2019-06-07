import { IMRRSettingsColumnsModel } from '@features/global-reporting/dashboard/model/i-mrr-settings-columns-model';
import { ISimpleTableSettingsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-model.components';
import { ISimpleTableSettingsPagerModel } from '@features/global-reporting/simple-table/model/i-simple_table-settings-pager-model';

export class IMRRSettingsModel implements ISimpleTableSettingsModel {
	public actions: boolean;
	public columns: IMRRSettingsColumnsModel;
	public hideHeader: boolean;
	public hideSubHeader: boolean;
	public noDataMessage: string;
	public pager: ISimpleTableSettingsPagerModel;
}
