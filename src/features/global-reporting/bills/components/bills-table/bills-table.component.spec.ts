import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BillsTableComponent } from './bills-table.component';
chai.use(dirtyChai);

describe('Bills table component', () => {
	let component: BillsTableComponent;
	let fixture: ComponentFixture<BillsTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BillsTableComponent, SmartTableComponent],
			imports: [Ng2SmartTableModule],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(BillsTableComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the bills table component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
