import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslatePartialLoaderConfiguration } from '@application/configuration/app/translate-partial-loader.configuration';
import { TRANSLATE_FOLDER } from '@application/helpers';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { GlobalReportingCategoryPage } from '@features/global-reporting/category/pages/global-reporting-category.page';
import { InvoicesChartComponent } from '@features/global-reporting/dashboard/components/invoices-chart/invoices-chart.component';
import { MrrChartComponent } from '@features/global-reporting/dashboard/components/mrr-chart/mrr-chart.component';
import { ProjectsOverviewChartComponent } from '@features/global-reporting/dashboard/components/projects-overview-chart/projects-overview-chart.component';
import { ProjectsTimelineChartComponent } from '@features/global-reporting/dashboard/components/projects-timeline-chart/projects-timeline-chart.component';
import { SatisfactionChartComponent } from '@features/global-reporting/dashboard/components/satisfaction-chart/satisfaction-chart.component';
import { GlobalReportingDashboardPage } from '@features/global-reporting/dashboard/pages/global-reporting-dashboard.page';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { GlobalReportingFeatureRoutingModule } from './global-reporting-feature-routing.module';

const TRANSLATE_FILE_LOCATION: string[] = ['/global-reporting/', '/app/'];
const PREFIXES: string[] = TRANSLATE_FILE_LOCATION.map((value: string) => TRANSLATE_FOLDER.concat(value));
const HTTP_LOADER_FACTORY: (http: HttpClient) => TranslatePartialLoaderConfiguration = (
	http: HttpClient
): TranslatePartialLoaderConfiguration => new TranslatePartialLoaderConfiguration(http, PREFIXES);
@NgModule({
	declarations: [
		GlobalReportingCategoryPage,
		GlobalReportingDashboardPage,
		InvoicesChartComponent,
		MrrChartComponent,
		ProjectsOverviewChartComponent,
		ProjectsTimelineChartComponent,
		SatisfactionChartComponent
	],
	imports: [
		GlobalReportingFeatureRoutingModule,
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
export class GlobalReportingFeatureModule {
	public constructor(translate: TranslateService) {
		translate.addLangs(['fr', 'en']);
		translate.use(translate.getBrowserCultureLang().split('-')[0]);
		translate.setDefaultLang('fr');
	}
}
