import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // we also need angular router for Nebular to function properly
import { MainLayout } from '@application/pages/layouts/main/main.layout';

const ROUTES: Routes = [
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
			}
		],
		component: MainLayout,
		path: ''
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRoutingModule {}
