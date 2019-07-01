import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { ProjectsOverviewChartStubComponent } from '@application/testing/projects-overview-chart.component.stub';
import { SignaturesChartStubComponent } from '@application/testing/signatures-chart.component.stub';
import { TicketsChartStubComponent } from '@application/testing/tickets-chart.component.stub';

import { InvoicesChartStubComponent } from '@application/testing/invoices-chart.component.stub';
import { MrrChartStubComponent } from '@application/testing/mrr-chart.component.stub';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { GlobalReportingDashboardPage } from './global-reporting-dashboard.page';
chai.use(dirtyChai);

describe('Global Reporting - Dashboard page', () => {
	let component: GlobalReportingDashboardPage;
	let fixture: ComponentFixture<GlobalReportingDashboardPage>;

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
				GlobalReportingDashboardPage,
				InvoicesChartStubComponent,
				MrrChartStubComponent,
				ProjectsOverviewChartStubComponent,
				SignaturesChartStubComponent,
				TicketsChartStubComponent
			],
			imports: [GlobalModule, RouterTestingModule],
			providers: [{ provide: MainLayout, useClass: MainStubLayout }, DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(GlobalReportingDashboardPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the dashboard page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
