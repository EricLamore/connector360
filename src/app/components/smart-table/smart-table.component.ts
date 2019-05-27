import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SmartTableItemsNumbers } from '@application/enums/smart-table-items-numbers';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-smart-table',
	templateUrl: './smart-table.component.html'
})
export class SmartTableComponent<T> {
	@Input() public hasPager: boolean;
	public readonly itemsNumbersPerPage: string[] = Object.keys(SmartTableItemsNumbers).map(
		(value: string) => SmartTableItemsNumbers[(value as unknown) as number]
	);
	@Output() public onClientClick: EventEmitter<string> = new EventEmitter<string>();
	@Input() public settings: INg2Settings<T>;
	@Input() public source: LocalDataSource;

	public setItemsNumberPerPage(itemsNumber: number): void {
		this.source.setPaging(1, itemsNumber, true);
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
