import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from '@application/pages';

const ROUTES: Routes = [
	{
		children: [
			{
				loadChildren:
					'@features/global-reporting/modules/global-reporting-feature.module#GlobalReportingFeatureModule',
				path: 'global-reporting'
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
