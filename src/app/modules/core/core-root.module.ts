import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@application/guards/auth-guard.service';
import { AuthPagesAccessGuard } from '@features/authentification/guards/auth-pages-access-guard.service';
import {
	NbAuthJWTToken,
	NbAuthModule,
	NbDummyAuthStrategy,
	NbDummyAuthStrategyOptions,
	NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbDatepickerModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { CorePublicModule } from './core-public.module';

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
				/*NbPasswordAuthStrategy.setup({
					name: 'email',
					token: {
						class: NbAuthJWTToken
					},
					baseEndpoint: '',
					login: {
						endpoint: '/api/auth/login'
					},
					register: {
						endpoint: '/api/auth/register'
					},
					logout: {
						endpoint: '/api/auth/logout'
					},
					requestPass: {
						endpoint: '/api/auth/request-pass'
					},
					resetPass: {
						endpoint: '/api/auth/reset-pass'
					}
				})*/
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
		NbThemeModule.forRoot({ name: 'universign' })
	],
	providers: [AuthGuard]
})
export class CoreRootModule {}
