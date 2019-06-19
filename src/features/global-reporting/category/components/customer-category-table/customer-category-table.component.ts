import { Component, Input, OnInit } from '@angular/core';
import { INg2Settings } from '@application/models/i-ng2-st-settings';
import { NbSearchService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-customer-category-table',
	templateUrl: './customer-category-table.component.html'
})
export class CustomerCategoryTableComponent<T> implements OnInit {
	@Input() public client: string;
	@Input() public readonly data: T[];
	@Input() public readonly settings: INg2Settings<T>;
	public source: LocalDataSource = new LocalDataSource(this.data);

	public constructor(private readonly _SEARCHSERVICE: NbSearchService) {}

	public ngOnInit(): void {
		this.source = new LocalDataSource(this.data);
		this._SEARCHSERVICE.onSearchDeactivate().subscribe((data: { term?: string; tag?: string }) => {
			this.client = '';
			this.updateSmartTable();
		});
		this._SEARCHSERVICE.onSearchSubmit().subscribe((data: { term?: string; tag?: string }) => {
			this.client = data.term;
			this.updateSmartTable();
		});
		this.updateSmartTable();
	}

	public updateSmartTable(): void {
		this.source.setFilter([{ field: 'client', search: this.client }]);
	}
}
