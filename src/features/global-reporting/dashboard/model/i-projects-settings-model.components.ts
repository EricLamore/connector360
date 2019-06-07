import { IProjectsSettingsColumnsModel } from '@features/global-reporting/dashboard/model/i-projects-settings-columns-model';
import { ISimpleTableSettingsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-model.components';
import { ISimpleTableSettingsPagerModel } from '@features/global-reporting/simple-table/model/i-simple_table-settings-pager-model';

export class IProjectsSettingsModel implements ISimpleTableSettingsModel {
	public actions: boolean;
	public columns: IProjectsSettingsColumnsModel;
	public hideHeader: boolean;
	public hideSubHeader: boolean;
	public noDataMessage: string;
	public pager: ISimpleTableSettingsPagerModel;
}
