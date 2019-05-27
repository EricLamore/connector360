import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from '@application/components/four-oh-four/four-oh-four.component';
import { OnlyLoggedGuard } from '@application/guards/only-logged-guard.service';
import { MainLayout } from '@application/pages/layouts/main/main.layout';

const ROUTES: Routes = [
	{
		path: 'auth',
		loadChildren: '@features/authentication/modules/authentication-feature.module#AuthenticationFeatureModule'
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
				path: 'customer-reporting/:customerName'
			}
		],
		path: '',
		canActivate: [OnlyLoggedGuard],
		component: MainLayout
	},
	{ path: 'not-found', component: FourOhFourComponent },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {}
