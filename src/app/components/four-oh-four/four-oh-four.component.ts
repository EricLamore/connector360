import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-four-oh-four',
	templateUrl: './four-oh-four.component.html'
})
export class FourOhFourComponent {
	public constructor(private readonly _ROUTER: Router) {}

	public goToHome(): void {
		this._ROUTER.navigate(['/']);
	}
}
