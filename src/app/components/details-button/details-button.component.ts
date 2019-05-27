import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-details-button',
	templateUrl: './details-button.component.html'
})
export class DetailsButtonComponent {
	@Input() public routerLink: string[];
}
