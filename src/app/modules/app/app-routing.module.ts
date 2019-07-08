import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // we also need angular router for Nebular to function properly
import { AuthComponent } from '@application/components/auth/auth.component';
import { AuthGuard } from '@application/guards/auth-guard.service';
import { AuthPagesAccessGuard } from '@application/guards/auth-pages-access-guard.service';
import { MainLayout } from '@application/pages/layouts/main/main.layout';
import {
	NbAuthComponent,
	NbLoginComponent,
	NbLogoutComponent,
	NbRegisterComponent,
	NbRequestPasswordComponent,
	NbResetPasswordComponent
} from '@nebular/auth';

const ROUTES: Routes = [
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{
				path: '',
				canActivate: [AuthPagesAccessGuard],
				component: NbLoginComponent
			},
			{
				path: 'login',
				canActivate: [AuthPagesAccessGuard],
				component: NbLoginComponent
			},
			{
				path: 'register',
				canActivate: [AuthPagesAccessGuard],
				component: NbRegisterComponent
			},
			{
				path: 'logout',
				canActivate: [AuthGuard],
				component: NbLogoutComponent
			},
			{
				path: 'request-password',
				canActivate: [AuthPagesAccessGuard],
				component: NbRequestPasswordComponent
			},
			{
				path: 'reset-password',
				canActivate: [AuthPagesAccessGuard],
				component: NbResetPasswordComponent
			}
		]
	},
	{
		children: [
			{
				loadChildren:
					'@features/global-reporting/modules/global-reporting-feature.module#GlobalReportingFeatureModule',
				path: 'global-reporting'
			},
			{
				loadChildren:
					'@features/customer-reporting/modules/customer-reporting-feature.module#CustomerReportingFeatureModule',
				path: 'customer-reporting'
			},
			{
				loadChildren:
					'@features/search-customers/modules/search-customers-feature.module#SearchCustomersFeatureModule',
				path: 'search-customers'
			}
		],
		component: MainLayout,
		canActivate: [AuthGuard],
		path: ''
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {}
