import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BillsTableClientComponent } from '@features/global-reporting/bills/components/bills-table-client/bills-table-client.component';
import { BillsTableComponent } from '@features/global-reporting/bills/components/bills-table/bills-table.component';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbLayoutModule, NbSearchModule } from '@nebular/theme';
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
			declarations: [
				BillsTableClientComponent,
				BillsTableComponent,
				GlobalReportingBillsPage,
				SmartTableComponent
			],
			imports: [Ng2SmartTableModule, NbLayoutModule, NbSearchModule, RouterTestingModule],
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
