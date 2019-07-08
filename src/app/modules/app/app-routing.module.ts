import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // we also need angular router for Nebular to function properly
import { AuthGuard } from '@application/guards/auth-guard.service';
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
		component: NbAuthComponent,
		children: [
			{
				path: '',
				component: NbLoginComponent
			},
			{
				path: 'login',
				component: NbLoginComponent
			},
			{
				path: 'register',
				component: NbRegisterComponent
			},
			{
				path: 'logout',
				component: NbLogoutComponent
			},
			{
				path: 'request-password',
				component: NbRequestPasswordComponent
			},
			{
				path: 'reset-password',
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
