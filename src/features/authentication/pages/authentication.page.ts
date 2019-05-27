import { Component } from '@angular/core';
import { NbAuthComponent } from '@nebular/auth';

@Component({
	selector: 'app-auth',
	templateUrl: './authentication.page.html'
})
export class AuthenticationPage extends NbAuthComponent {}
