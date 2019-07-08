import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@application/guards/auth-guard.service';
import { AuthComponent } from '@features/auth/auth/pages/auth.component';
import { AuthPagesAccessGuard } from '@features/auth/guards/auth-pages-access-guard.service';
import {
	NbLoginComponent,
	NbLogoutComponent,
	NbRegisterComponent,
	NbRequestPasswordComponent,
	NbResetPasswordComponent
} from '@nebular/auth';

const GLOBAL_REPORTING_ROUTES: Routes = [
	{
		path: '',
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
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(GLOBAL_REPORTING_ROUTES)]
})
export class AuthFeatureRoutingModule {}
