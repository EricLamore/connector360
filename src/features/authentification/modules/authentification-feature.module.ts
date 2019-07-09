import { NgModule } from '@angular/core';
import { AuthGuard } from '@application/guards/auth-guard.service';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { AuthPagesAccessGuard } from '@features/authentification/guards/auth-pages-access-guard.service';
import { LoginComponent } from '@features/authentification/login/pages/login.component';
import { LogoutComponent } from '@features/authentification/logout/pages/logout.component';
import { AuthentificationFeatureRoutingModule } from '@features/authentification/modules/authentification-feature-routing.module';
import { AuthComponent } from '@features/authentification/pages/auth.component';
import { RegisterComponent } from '@features/authentification/register/pages/register.component';
import { RequestPasswordComponent } from '@features/authentification/request-password/pages/request-password.component';
import { ResetPasswordComponent } from '@features/authentification/reset-password/pages/reset-password.component';

@NgModule({
	declarations: [
		AuthComponent,
		LoginComponent,
		LogoutComponent,
		RegisterComponent,
		RequestPasswordComponent,
		ResetPasswordComponent
	],
	imports: [AuthentificationFeatureRoutingModule, SharedModule],
	providers: [AuthGuard, AuthPagesAccessGuard]
})
export class AuthentificationFeatureModule {}
