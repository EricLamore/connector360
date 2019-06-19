import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { CustomerReportingDashboardPage } from '@features/customer-reporting/dashboard/pages/customer-reporting-dashboard.page';
import { CustomerReportingFeatureRoutingModule } from './customer-reporting-feature-routing.module';

@NgModule({
	declarations: [CustomerReportingDashboardPage],
	imports: [CustomerReportingFeatureRoutingModule, SharedModule],
	providers: [DatePipe]
})
export class CustomerReportingFeatureModule {}
