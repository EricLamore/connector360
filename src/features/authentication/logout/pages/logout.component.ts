import { Component } from '@angular/core';
import { NbLogoutComponent } from '@nebular/auth';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html'
})
export class LogoutComponent extends NbLogoutComponent {}
