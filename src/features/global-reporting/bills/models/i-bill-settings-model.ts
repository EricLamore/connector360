import { IBillSettingsColumnsModel } from './i-bill-settings-columns-model';
import { IBillSettingsPagerModel } from './i-bill-settings-pager-model';

export interface IBillSettingsModel {
	actions: boolean;
	columns: IBillSettingsColumnsModel;
	hideSubHeader: boolean;
	noDataMessage: string;
	pager: IBillSettingsPagerModel;
}
