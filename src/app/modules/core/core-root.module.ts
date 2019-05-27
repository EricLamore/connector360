import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslatePartialLoaderConfiguration } from '@application/configuration/app/translate-partial-loader.configuration';
import { OnlyLoggedGuard } from '@application/guards/only-logged-guard.service';
import { OnlyUnloggedGuard } from '@application/guards/only-unlogged-guard.service';
import { TRANSLATE_FOLDER } from '@application/helpers';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbDatepickerModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CorePublicModule } from './core-public.module';

const TRANSLATE_FILE_LOCATION: string[] = ['/app/'];
const PREFIXES: string[] = TRANSLATE_FILE_LOCATION.map((value: string) => TRANSLATE_FOLDER.concat(value));
const HTTP_LOADER_FACTORY: (http: HttpClient) => TranslatePartialLoaderConfiguration = (
	http: HttpClient
): TranslatePartialLoaderConfiguration => new TranslatePartialLoaderConfiguration(http, PREFIXES);
@NgModule({
	exports: [CorePublicModule],
	imports: [
		BrowserAnimationsModule,
		CorePublicModule,
		HttpClientModule,
		NbAuthModule.forRoot({
			strategies: [
				NbDummyAuthStrategy.setup({
					name: 'email'
				})
			],
			forms: {
				login: {
					rememberMe: false
				}
			}
		}),
		NbDatepickerModule.forRoot(),
		NbMenuModule.forRoot(),
		NbSidebarModule.forRoot(),
		NbThemeModule.forRoot({ name: 'universign' }),
		TranslateModule.forRoot({
			isolate: true,
			loader: {
				deps: [HttpClient],
				provide: TranslateLoader,
				useFactory: HTTP_LOADER_FACTORY
			}
		})
	],
	providers: [OnlyLoggedGuard, OnlyUnloggedGuard]
})
export class CoreRootModule {
	public constructor(translate: TranslateService) {
		translate.addLangs(['fr', 'en']);
		translate.use(translate.getBrowserCultureLang().split('-')[0]);
		translate.setDefaultLang('fr');
	}
}
