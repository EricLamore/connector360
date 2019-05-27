import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslatePartialLoaderConfiguration } from '@application/configuration/app/translate-partial-loader.configuration';
import { OnlyLoggedGuard } from '@application/guards/only-logged-guard.service';
import { OnlyUnloggedGuard } from '@application/guards/only-unlogged-guard.service';
import { TRANSLATE_FOLDER } from '@application/helpers';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { LoginComponent } from '@features/authentication/login/pages/login.component';
import { LogoutComponent } from '@features/authentication/logout/pages/logout.component';
import { AuthenticationFeatureRoutingModule } from '@features/authentication/modules/authentication-feature-routing.module';
import { AuthenticationPage } from '@features/authentication/pages/authentication.page';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

const TRANSLATE_FILE_LOCATION: string[] = ['/authentication/', '/app/'];
const PREFIXES: string[] = TRANSLATE_FILE_LOCATION.map((value: string) => TRANSLATE_FOLDER.concat(value));
const HTTP_LOADER_FACTORY: (http: HttpClient) => TranslatePartialLoaderConfiguration = (
	http: HttpClient
): TranslatePartialLoaderConfiguration => new TranslatePartialLoaderConfiguration(http, PREFIXES);
@NgModule({
	declarations: [AuthenticationPage, LoginComponent, LogoutComponent],
	imports: [
		AuthenticationFeatureRoutingModule,
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
	providers: [OnlyLoggedGuard, OnlyUnloggedGuard]
})
export class AuthenticationFeatureModule {
	public constructor(translate: TranslateService) {
		translate.addLangs(['fr', 'en']);
		translate.use(translate.getBrowserCultureLang().split('-')[0]);
		translate.setDefaultLang('fr');
	}
}
