// tslint:disable: no-magic-numbers
import { Component, Input } from '@angular/core';
import { IBillDataModel } from '@features/global-reporting/bills/models/i-bill-data-model';
import { IBillSettingsModel } from '@features/global-reporting/bills/models/i-bill-settings-model';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-smart-table',
	templateUrl: './smart-table.component.html'
})
export class SmartTableComponent {
	public readonly itemsNumbersPerPage: number[] = [1, 2, 5];
	@Input() public settings: IBillSettingsModel;
	@Input() public source: LocalDataSource;

	public setItemsNumberPerPage(itemsNumber: number): void {
		this.source.setPaging(1, itemsNumber, true);
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
