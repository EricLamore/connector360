import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent extends NbLoginComponent {
	public trackById(index: number, item: number): number {
		return index;
	}
}
