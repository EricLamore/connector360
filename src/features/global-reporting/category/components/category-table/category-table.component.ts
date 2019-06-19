import { Component, Input, OnInit } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-category-table',
	templateUrl: './category-table.component.html'
})
export class CategoryTableComponent<T> implements OnInit {
	@Input() public readonly data: T[];
	@Input() public readonly settings: INg2Settings<T>;
	public source: LocalDataSource = new LocalDataSource(this.data);

	public ngOnInit(): void {
		this.source = new LocalDataSource(this.data);
	}
}
