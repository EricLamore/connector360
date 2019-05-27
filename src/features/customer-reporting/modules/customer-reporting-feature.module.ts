import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslatePartialLoaderConfiguration } from '@application/configuration/app/translate-partial-loader.configuration';
import { TRANSLATE_FOLDER } from '@application/helpers';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { CustomerReportingCategoryPage } from '@features/customer-reporting/category/pages/customer-reporting-category.page';
import { CustomerGlobalDetailsComponent } from '@features/customer-reporting/dashboard/components/customer-global-details/customer-global-details.component';
import { SatisfactionChartComponent } from '@features/customer-reporting/dashboard/components/satisfaction-chart/satisfaction-chart.component';
import { SubscriptionsComponent } from '@features/customer-reporting/dashboard/components/subscriptions/subscriptions.component';
import { CustomerReportingDashboardPage } from '@features/customer-reporting/dashboard/pages/customer-reporting-dashboard.page';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CustomerReportingFeatureRoutingModule } from './customer-reporting-feature-routing.module';

const TRANSLATE_FILE_LOCATION: string[] = ['/customer-reporting/', '/app/'];
const PREFIXES: string[] = TRANSLATE_FILE_LOCATION.map((value: string) => TRANSLATE_FOLDER.concat(value));
const HTTP_LOADER_FACTORY: (http: HttpClient) => TranslatePartialLoaderConfiguration = (
	http: HttpClient
): TranslatePartialLoaderConfiguration => new TranslatePartialLoaderConfiguration(http, PREFIXES);
@NgModule({
	declarations: [
		CustomerGlobalDetailsComponent,
		CustomerReportingCategoryPage,
		CustomerReportingDashboardPage,
		SatisfactionChartComponent,
		SubscriptionsComponent
	],
	imports: [
		CustomerReportingFeatureRoutingModule,
		SharedModule,
		TranslateModule.forChild({
			isolate: true,
			loader: {
				deps: [HttpClient],
				provide: TranslateLoader,
				useFactory: HTTP_LOADER_FACTORY
			}
		})
	],
	providers: []
})
export class CustomerReportingFeatureModule {
	public constructor(translate: TranslateService) {
		translate.addLangs(['fr', 'en']);
		translate.use(translate.getBrowserCultureLang().split('-')[0]);
		translate.setDefaultLang('fr');
	}
}
