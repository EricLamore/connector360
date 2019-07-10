import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
	selector: 'app-auth',
	templateUrl: './authentication.component.html'
})
export class AuthenticationComponent extends NbAuthComponent {}
