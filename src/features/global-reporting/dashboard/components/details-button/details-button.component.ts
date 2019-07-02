import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-details-button',
	templateUrl: './details-button.component.html',
	styleUrls: ['./details-button.component.scss']
})
export class DetailsButtonComponent {
	@Input() public routerLink: string[];
}
