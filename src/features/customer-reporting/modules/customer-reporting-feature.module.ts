import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerReportingDashboardPage } from '@features/customer-reporting/dashboard/pages/customer-reporting-dashboard.page';

import { CustomerReportingFeatureRoutingModule } from './customer-reporting-feature-routing.module';

@NgModule({
	declarations: [CustomerReportingDashboardPage],
	imports: [CommonModule, FlexLayoutModule, CustomerReportingFeatureRoutingModule],
	providers: []
})
export class CustomerReportingFeatureModule {}
