import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PerformanceGaugeChartComponent } from '@features/global-reporting/dashboard/components/performance-gauge-chart/performance-gauge-chart.component';
import { SatisfactionDoughnutChartComponent } from '@features/global-reporting/dashboard/components/satisfaction-doughnut-chart/satisfaction-doughnut-chart.component';
import { SignaturesLineChartComponent } from '@features/global-reporting/dashboard/components/signatures-line-chart/signatures-line-chart.component';
import { TicketsBarChartComponent } from '@features/global-reporting/dashboard/components/tickets-bar-chart/tickets-bar-chart.component';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbCardModule } from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingDashboardPage } from './global-reporting-dashboard.page';
chai.use(dirtyChai);

describe('Dashboard page', () => {
	let component: GlobalReportingDashboardPage;
	let fixture: ComponentFixture<GlobalReportingDashboardPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				GlobalReportingDashboardPage,
				PerformanceGaugeChartComponent,
				SatisfactionDoughnutChartComponent,
				SignaturesLineChartComponent,
				SmartTableComponent,
				TicketsBarChartComponent
			],
			imports: [ChartsModule, NbCardModule, Ng2SmartTableModule, RouterTestingModule],
			providers: [DatePipe]
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
