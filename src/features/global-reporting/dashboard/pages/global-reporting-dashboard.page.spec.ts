import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { InvoicesChartStubComponent } from '@application/testing/invoices-chart.component.stub';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { MrrChartStubComponent } from '@application/testing/mrr-chart.component.stub';
import { ProductsChartStubComponent } from '@application/testing/products-chart.component.stub';
import { ProjectsOverviewChartStubComponent } from '@application/testing/projects-overview-chart.component.stub';
import { ProjectsTimelineChartStubComponent } from '@application/testing/projects-timeline-chart.component.stub';
import { SatisfactionChartStubComponent } from '@application/testing/satisfaction-chart.component.stub';
import { TicketsChartStubComponent } from '@application/testing/tickets-chart.component.stub';

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
				ProductsChartStubComponent,
				ProjectsOverviewChartStubComponent,
				ProjectsTimelineChartStubComponent,
				SatisfactionChartStubComponent,
				TicketsChartStubComponent
			],
			imports: [GlobalModule, RouterTestingModule],
			providers: [{ provide: MainLayout, useClass: MainStubLayout }]
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
