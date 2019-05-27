import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-customer-global-details',
	template: ''
})
export class CustomerGlobalDetailsStubComponent {
	@Input() public customerName: string;
}
