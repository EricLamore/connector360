import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BillsTableComponent } from '@features/global-reporting/bills/components/bills-table.component';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingBillsPage } from './global-reporting-bills.page';
chai.use(dirtyChai);

describe('Bills page', () => {
	let component: GlobalReportingBillsPage;
	let fixture: ComponentFixture<GlobalReportingBillsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GlobalReportingBillsPage, BillsTableComponent, SmartTableComponent],
			imports: [Ng2SmartTableModule],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(GlobalReportingBillsPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the bills page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
