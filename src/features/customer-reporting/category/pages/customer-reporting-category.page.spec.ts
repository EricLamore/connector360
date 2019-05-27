import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayout } from '@application/pages';
import { CategoryTableStubComponent } from '@application/testing/category-table.component.stub';
import { MainStubLayout } from '@application/testing/main.layout.stub';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { CustomerReportingCategoryPage } from './customer-reporting-category.page';
chai.use(dirtyChai);

describe('Customer Reporting - Category page', () => {
	let component: CustomerReportingCategoryPage;
	let fixture: ComponentFixture<CustomerReportingCategoryPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CategoryTableStubComponent, CustomerReportingCategoryPage],
			imports: [RouterTestingModule],
			providers: [{ provide: MainLayout, useClass: MainStubLayout }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(CustomerReportingCategoryPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the category page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
