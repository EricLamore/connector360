import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@application/guards/auth-guard.service';
import { AuthComponent } from '@features/authentification/auth/pages/auth.component';
import { AuthPagesAccessGuard } from '@features/authentification/guards/auth-pages-access-guard.service';
import { LoginComponent } from '@features/authentification/login/pages/login.component';
import { LogoutComponent } from '@features/authentification/logout/pages/logout.component';
import { RegisterComponent } from '@features/authentification/register/pages/register.component';
import { RequestPasswordComponent } from '@features/authentification/request-password/pages/request-password.component';
import { ResetPasswordComponent } from '@features/authentification/reset-password/pages/reset-password.component';

const AUTH_ROUTES: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: '',
				canActivate: [AuthPagesAccessGuard],
				component: LoginComponent
			},
			{
				path: 'login',
				canActivate: [AuthPagesAccessGuard],
				component: LoginComponent
			},
			{
				path: 'register',
				canActivate: [AuthPagesAccessGuard],
				component: RegisterComponent
			},
			{
				path: 'logout',
				canActivate: [AuthGuard],
				component: LogoutComponent
			},
			{
				path: 'request-password',
				canActivate: [AuthPagesAccessGuard],
				component: RequestPasswordComponent
			},
			{
				path: 'reset-password',
				canActivate: [AuthPagesAccessGuard],
				component: ResetPasswordComponent
			}
		]
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(AUTH_ROUTES)]
})
export class AuthentificationFeatureRoutingModule {}
