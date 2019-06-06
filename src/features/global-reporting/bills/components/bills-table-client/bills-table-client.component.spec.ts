import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbLayoutModule, NbSearchModule, NbThemeModule } from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BillsTableClientComponent } from './bills-table-client.component';
chai.use(dirtyChai);

describe('Bills table client component', () => {
	let component: BillsTableClientComponent;
	let fixture: ComponentFixture<BillsTableClientComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BillsTableClientComponent, SmartTableComponent],
			imports: [
				Ng2SmartTableModule,
				NbLayoutModule,
				NbSearchModule,
				NbThemeModule.forRoot(),
				RouterTestingModule
			],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(BillsTableClientComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the bills table client component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
