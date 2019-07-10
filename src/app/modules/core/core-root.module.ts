import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationGuard } from '@application/guards/authentication-guard.service';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
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
	providers: [AuthenticationGuard]
})
export class CoreRootModule {}
