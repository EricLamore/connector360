import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { CategoryTableStubComponent } from '@application/testing/category-table.component.stub';
import { DetailsButtonStubComponent } from '@application/testing/details-button.component.stub';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { ProductsChartStubComponent } from '@application/testing/products-chart.component.stub';
import { SmartTableStubComponent } from '@application/testing/smart-table.component.stub';
import { TicketsChartStubComponent } from '@application/testing/tickets-chart.component.stub';
import { CustomerGlobalDetailsStubComponent } from '@features/customer-reporting/dashboard/testing/customer-global-details.component.stub';
import { SatisfactionChartStubComponent } from '@features/customer-reporting/dashboard/testing/satisfaction-chart.component.stub';
import { SubscriptionsStubComponent } from '@features/customer-reporting/dashboard/testing/subscriptions.component.stub';
import { TranslateModule } from '@ngx-translate/core';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { CustomerReportingDashboardPage } from './customer-reporting-dashboard.page';
chai.use(dirtyChai);

describe('Customer Reporting - Dashboard page', () => {
	let component: CustomerReportingDashboardPage;
	let fixture: ComponentFixture<CustomerReportingDashboardPage>;

	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn(() => {
				return {
					matches: true
				};
			})
		});
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CustomerGlobalDetailsStubComponent,
				CategoryTableStubComponent,
				CustomerReportingDashboardPage,
				DetailsButtonStubComponent,
				ProductsChartStubComponent,
				SatisfactionChartStubComponent,
				SmartTableStubComponent,
				SubscriptionsStubComponent,
				TicketsChartStubComponent
			],
			imports: [GlobalModule, RouterTestingModule, TranslateModule.forRoot()],
			providers: [{ provide: MainLayout, useClass: MainStubLayout }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(CustomerReportingDashboardPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the dashboard page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
