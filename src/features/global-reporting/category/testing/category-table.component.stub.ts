import { Component, Input } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';

@Component({
	selector: 'app-category-table',
	template: ''
})
export class CategoryTableStubComponent<T> {
	@Input() public readonly data: T[];
	@Input() public readonly settings: INg2Settings<T>;
}
