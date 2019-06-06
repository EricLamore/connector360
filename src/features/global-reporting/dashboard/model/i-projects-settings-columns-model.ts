import { ISimpleTableSettingsColumnModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-column-model';
import { ISimpleTableSettingsColumnsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-columns-model';

export class IProjectsSettingsColumnsModel implements ISimpleTableSettingsColumnsModel {
	public debut: ISimpleTableSettingsColumnModel;
	public meteo: ISimpleTableSettingsColumnModel;
	public name: ISimpleTableSettingsColumnModel;
	public status: ISimpleTableSettingsColumnModel;
}
