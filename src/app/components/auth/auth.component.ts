/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
	selector: 'app-auth',
	styleUrls: ['./auth.component.scss'],
	templateUrl: './auth.component.html'
})
export class AuthComponent extends NbAuthComponent {}
