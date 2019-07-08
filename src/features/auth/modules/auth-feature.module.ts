import { NgModule } from '@angular/core';
import { AuthGuard } from '@application/guards/auth-guard.service';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { AuthComponent } from '@features/auth/auth/pages/auth.component';
import { AuthPagesAccessGuard } from '@features/auth/guards/auth-pages-access-guard.service';
import { AuthFeatureRoutingModule } from '@features/auth/modules/auth-feature-routing.module';

@NgModule({
	declarations: [AuthComponent],
	imports: [AuthFeatureRoutingModule, SharedModule],
	providers: [AuthGuard, AuthPagesAccessGuard]
})
export class AuthFeatureModule {}
