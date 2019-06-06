import { IBusinessSituationSettingsColumnsModel } from '@features/global-reporting/dashboard/model/i-business-situation-settings-columns-model';
import { ISimpleTableSettingsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-model.components';
import { ISimpleTableSettingsPagerModel } from '@features/global-reporting/simple-table/model/i-simple_table-settings-pager-model';

export class IBusinessSituationSettingsModel implements ISimpleTableSettingsModel {
	public actions: boolean;
	public columns: IBusinessSituationSettingsColumnsModel;
	public hideSubHeader: boolean;
	public noDataMessage: string;
	public pager: ISimpleTableSettingsPagerModel;
}
