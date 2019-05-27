import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerGlobalDetailService } from '@features/customer-reporting/dashboard/services/customer-global-detail.service';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { CustomerGlobalDetailsComponent } from './customer-global-details.component';
chai.use(dirtyChai);

describe('Customer global details component', () => {
	let component: CustomerGlobalDetailsComponent;
	let fixture: ComponentFixture<CustomerGlobalDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CustomerGlobalDetailsComponent],
			imports: [],
			providers: [CustomerGlobalDetailService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(CustomerGlobalDetailsComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the customer global details component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
