import { Component, Input, OnInit } from '@angular/core';
import { ISimpleTableDataModel } from '@features/global-reporting/simple-table/model/i-simple-table-data-model.component';
import { ISimpleTableSettingsModel } from '@features/global-reporting/simple-table/model/i-simple-table-settings-model.components';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
	selector: 'app-simple-table',
	templateUrl: './simple-table.component.html',
	styleUrls: ['simple-table.component.css']
})
export class SimpleTableComponent implements OnInit {
	@Input() public data: ISimpleTableDataModel[];
	@Input() public settings: ISimpleTableSettingsModel;
	public source: LocalDataSource;

	public ngOnInit(): void {
		this.source = new LocalDataSource(this.data);
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
