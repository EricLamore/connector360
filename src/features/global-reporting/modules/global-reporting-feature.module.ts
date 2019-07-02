import { NgModule } from '@angular/core';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { CategoryTableComponent } from '@features/global-reporting/category/components/category-table/category-table.component';
import { CustomerCategoryTableComponent } from '@features/global-reporting/category/components/customer-category-table/customer-category-table.component';
import { GlobalReportingCategoryPage } from '@features/global-reporting/category/pages/global-reporting-category.page';
import { DetailsButtonComponent } from '@features/global-reporting/dashboard/components/details-button/details-button.component';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { GlobalReportingFeatureRoutingModule } from './global-reporting-feature-routing.module';

@NgModule({
	declarations: [
		CategoryTableComponent,
		DetailsButtonComponent,
		CustomerCategoryTableComponent,
		GlobalReportingCategoryPage,
		GlobalReportingDashboardPage
	],
	imports: [GlobalReportingFeatureRoutingModule, SharedModule],
	providers: []
})
export class GlobalReportingFeatureModule {}
