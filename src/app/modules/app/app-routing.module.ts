import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // we also need angular router for Nebular to function properly
import { AuthGuard } from '@application/guards/auth-guard.service';
import { MainLayout } from '@application/pages/layouts/main/main.layout';

const ROUTES: Routes = [
	{
		path: 'auth',
		loadChildren: '@features/auth/modules/auth-feature.module#AuthFeatureModule'
	},
	{
		children: [
			{
				loadChildren: '@features/auth/modules/auth-feature.module#AuthFeatureModule',
				path: 'auth'
			},
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
