// tslint:disable: no-magic-numbers
import { Component, Input } from '@angular/core';
import { INg2Settings } from '@features/global-reporting/smart-table/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-smart-table',
	templateUrl: './smart-table.component.html'
})
export class SmartTableComponent<T> {
	public readonly itemsNumbersPerPage: number[] = [1, 2, 5];
	@Input() public settings: INg2Settings<T>;
	@Input() public source: LocalDataSource;

	public setItemsNumberPerPage(itemsNumber: number): void {
		this.source.setPaging(1, itemsNumber, true);
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
