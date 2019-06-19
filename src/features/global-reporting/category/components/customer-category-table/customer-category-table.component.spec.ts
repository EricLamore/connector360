import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ICategory } from '@application/models/i-category';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { SmartTableStubComponent } from '@application/testing/smart-table.component.stub';
import { NbThemeModule } from '@nebular/theme';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { CustomerCategoryTableComponent } from './customer-category-table.component';
chai.use(dirtyChai);

describe('Global Reporting - Customer category table component', () => {
	let component: CustomerCategoryTableComponent<ICategory>;
	let fixture: ComponentFixture<CustomerCategoryTableComponent<ICategory>>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CustomerCategoryTableComponent, SmartTableStubComponent],
			imports: [GlobalModule, NbThemeModule.forRoot(), RouterTestingModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(CustomerCategoryTableComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the customer category table component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
