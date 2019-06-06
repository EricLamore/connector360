import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalReportingBillsPage } from '@features/global-reporting/bills/pages/global-reporting-bills.page';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { GlobalReportingProjectsPage } from '@features/global-reporting/projects/pages/global-reporting-projects.page';

const GLOBAL_REPORTING_ROUTES: Routes = [
	{
		component: GlobalReportingDashboardPage,
		path: ''
	},
	{
		component: GlobalReportingBillsPage,
		path: 'bills'
	},
	{
		component: GlobalReportingBillsPage,
		path: 'bills/:client'
	},
	{
		component: GlobalReportingProjectsPage,
		path: 'projects'
	},
	{
		component: GlobalReportingProjectsPage,
		path: 'projects/:client'
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(GLOBAL_REPORTING_ROUTES)]
})
export class GlobalReportingFeatureRoutingModule {}