// tslint:disable: no-magic-numbers
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-smart-table',
	templateUrl: './smart-table.component.html'
})
export class SmartTableComponent<T> {
	public readonly itemsNumbersPerPage: number[] = [1, 2, 5];
	@Input() public settings: INg2Settings<T>;
	@Input() public source: LocalDataSource;
	@Input() public hasPager: boolean;
	@Output() public onClientClick: EventEmitter<string> = new EventEmitter<string>();

	public setItemsNumberPerPage(itemsNumber: number): void {
		this.source.setPaging(1, itemsNumber, true);
	}

	public trackById(index: number, item: number): number {
		return index;
	}

	public onRowSelect({ data: { client } }: { data: { client: string } }): void {
		this.onClientClick.emit(client);
	}
}
