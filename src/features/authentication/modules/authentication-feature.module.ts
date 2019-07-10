import { NgModule } from '@angular/core';
import { AuthenticationGuard } from '@application/guards/authentication-guard.service';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { LoginComponent } from '@features/authentication/login/pages/login.component';
import { LogoutComponent } from '@features/authentication/logout/pages/logout.component';
import { AuthenticationFeatureRoutingModule } from '@features/authentication/modules/authentication-feature-routing.module';
import { AuthenticationComponent } from '@features/authentication/pages/authentication.component';
import { RegisterComponent } from '@features/authentication/register/pages/register.component';
import { RequestPasswordComponent } from '@features/authentication/request-password/pages/request-password.component';
import { ResetPasswordComponent } from '@features/authentication/reset-password/pages/reset-password.component';

@NgModule({
	declarations: [
		AuthenticationComponent,
		LoginComponent,
		LogoutComponent,
		RegisterComponent,
		RequestPasswordComponent,
		ResetPasswordComponent
	],
	imports: [AuthenticationFeatureRoutingModule, SharedModule],
	providers: [AuthenticationGuard]
})
export class AuthenticationFeatureModule {}
