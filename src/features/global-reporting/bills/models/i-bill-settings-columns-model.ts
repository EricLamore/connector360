import { IBillSettingsColumnModel } from './i-bill-settings-column-model';

export interface IBillSettingsColumnsModel {
	client?: IBillSettingsColumnModel;
	date: IBillSettingsColumnModel;
	name: IBillSettingsColumnModel;
	price: IBillSettingsColumnModel;
	status: IBillSettingsColumnModel;
}
