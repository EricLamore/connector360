import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { DetailsButtonStubComponent } from '@application/testing/details-button.component.stub';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { ProductsChartStubComponent } from '@application/testing/products-chart.component.stub';
import { TicketsChartStubComponent } from '@application/testing/tickets-chart.component.stub';
import { InvoicesChartStubComponent } from '@features/global-reporting/dashboard/testing/invoices-chart.component.stub';
import { MrrChartStubComponent } from '@features/global-reporting/dashboard/testing/mrr-chart.component.stub';
import { ProjectsOverviewChartStubComponent } from '@features/global-reporting/dashboard/testing/projects-overview-chart.component.stub';
import { ProjectsTimelineChartStubComponent } from '@features/global-reporting/dashboard/testing/projects-timeline-chart.component.stub';
import { SatisfactionChartStubComponent } from '@features/global-reporting/dashboard/testing/satisfaction-chart.component.stub';
import { TranslateModule } from '@ngx-translate/core';

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
				DetailsButtonStubComponent,
				GlobalReportingDashboardPage,
				InvoicesChartStubComponent,
				MrrChartStubComponent,
				ProductsChartStubComponent,
				ProjectsOverviewChartStubComponent,
				ProjectsTimelineChartStubComponent,
				SatisfactionChartStubComponent,
				TicketsChartStubComponent
			],
			imports: [GlobalModule, RouterTestingModule, TranslateModule.forRoot()],
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
