import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { PerformanceChartStubComponent } from '@application/testing/performance-chart.component.stub';
import { SatisfactionChartStubComponent } from '@application/testing/satisfaction-chart.component.stub';
import { SignaturesChartStubComponent } from '@application/testing/signatures-chart.component.stub';
import { SmartTableStubComponent } from '@application/testing/smart-table.component.stub';
import { TicketsChartStubComponent } from '@application/testing/tickets-chart.component.stub';

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
				CustomerReportingDashboardPage,
				PerformanceChartStubComponent,
				SatisfactionChartStubComponent,
				SignaturesChartStubComponent,
				SmartTableStubComponent,
				TicketsChartStubComponent
			],
			imports: [GlobalModule],
			providers: [{ provide: MainLayout, useClass: MainStubLayout }, DatePipe]
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
