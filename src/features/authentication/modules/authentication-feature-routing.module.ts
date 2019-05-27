import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyLoggedGuard } from '@application/guards/only-logged-guard.service';
import { OnlyUnloggedGuard } from '@application/guards/only-unlogged-guard.service';
import { LoginComponent } from '@features/authentication/login/pages/login.component';
import { LogoutComponent } from '@features/authentication/logout/pages/logout.component';
import { AuthenticationPage } from '@features/authentication/pages/authentication.page';

const AUTH_ROUTES: Routes = [
	{
		path: '',
		canActivate: [OnlyUnloggedGuard],
		component: AuthenticationPage,
		children: [
			{
				path: 'login',
				canActivate: [OnlyUnloggedGuard],
				component: LoginComponent
			},
			{
				path: 'logout',
				canActivate: [OnlyLoggedGuard],
				component: LogoutComponent
			}
		]
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(AUTH_ROUTES)]
})
export class AuthenticationFeatureRoutingModule {}
