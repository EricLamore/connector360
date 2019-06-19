import { Component, Input } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-smart-table',
	template: ''
})
export class SmartTableStubComponent<T> {
	@Input() public settings: INg2Settings<T>;
	@Input() public source: LocalDataSource;
	@Input() public hasPager: boolean;
}
