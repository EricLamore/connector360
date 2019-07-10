import { Component } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent extends NbResetPasswordComponent {
	public trackById(index: number, item: number): number {
		return index;
	}
}
