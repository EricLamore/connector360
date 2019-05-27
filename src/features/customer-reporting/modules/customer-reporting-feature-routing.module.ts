import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReportingCategoryPage } from '@features/customer-reporting/category/pages/customer-reporting-category.page';
import { CustomerReportingDashboardPage } from '@features/customer-reporting/dashboard/pages/customer-reporting-dashboard.page';

const CUSTOMER_REPORTING_ROUTES: Routes = [
	{
		path: '',
		component: CustomerReportingDashboardPage
	},
	{
		path: ':category',
		component: CustomerReportingCategoryPage
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(CUSTOMER_REPORTING_ROUTES)]
})
export class CustomerReportingFeatureRoutingModule {}
