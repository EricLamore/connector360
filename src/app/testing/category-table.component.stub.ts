import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-category-table',
	template: ''
})
export class CategoryTableStubComponent {
	@Input() public category: string;
	@Input() public customerName: string;
	@Input() public hasPager: boolean;
	@Input() public hideSubHeader: boolean;
	@Input() public perPage: number;
}
