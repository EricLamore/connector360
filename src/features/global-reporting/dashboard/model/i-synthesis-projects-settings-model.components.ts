import { ISynthesisProjectsSettingsColumnsModel } from '@features/global-reporting/dashboard/model/i-synthesis-projects-settings-columns-model';
import { ISimpleTableSettingsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-model.components';
import { ISimpleTableSettingsPagerModel } from '@features/global-reporting/simple-table/model/i-simple_table-settings-pager-model';

export class ISynthesisProjectsSettingsModel implements ISimpleTableSettingsModel {
	public actions: boolean;
	public columns: ISynthesisProjectsSettingsColumnsModel;
	public hideHeader: boolean;
	public hideSubHeader: boolean;
	public noDataMessage: string;
	public pager: ISimpleTableSettingsPagerModel;
}
