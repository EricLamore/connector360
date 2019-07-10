/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
	selector: 'app-login',
	styleUrls: ['./login.component.scss'],
	templateUrl: './login.component.html'
})
export class LoginComponent extends NbLoginComponent {
	public trackById(index: number, item: number): number {
		return index;
	}
}
