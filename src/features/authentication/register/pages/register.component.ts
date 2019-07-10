import { Component } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html'
})
export class RegisterComponent extends NbRegisterComponent {
	public trackById(index: number, item: number): number {
		return index;
	}
}
