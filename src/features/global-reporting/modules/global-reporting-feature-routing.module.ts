import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalReportingCategoryPage } from '@features/global-reporting/category/pages/global-reporting-category.page';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';

const GLOBAL_REPORTING_ROUTES: Routes = [
	{
		path: '',
		component: GlobalReportingDashboardPage
	},
	{
		path: ':category',
		component: GlobalReportingCategoryPage
	},
	{
		path: ':category/:client',
		component: GlobalReportingCategoryPage
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(GLOBAL_REPORTING_ROUTES)]
})
export class GlobalReportingFeatureRoutingModule {}
