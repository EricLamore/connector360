import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '@application/guards/authentication-guard.service';
import { LoginComponent } from '@features/authentication/login/pages/login.component';
import { LogoutComponent } from '@features/authentication/logout/pages/logout.component';
import { AuthenticationComponent } from '@features/authentication/pages/authentication.component';
import { RegisterComponent } from '@features/authentication/register/pages/register.component';
import { RequestPasswordComponent } from '@features/authentication/request-password/pages/request-password.component';
import { ResetPasswordComponent } from '@features/authentication/reset-password/pages/reset-password.component';

const AUTH_ROUTES: Routes = [
	{
		path: '',
		canActivateChild: [AuthenticationGuard],
		component: AuthenticationComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'register',
				component: RegisterComponent
			},
			{
				path: 'request-password',
				component: RequestPasswordComponent
			}
		]
	},
	{
		path: 'reset-password',
		canActivate: [AuthenticationGuard],
		component: ResetPasswordComponent
	},
	{
		path: 'logout',
		canActivate: [AuthenticationGuard],
		component: LogoutComponent
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(AUTH_ROUTES)]
})
export class AuthenticationFeatureRoutingModule {}
