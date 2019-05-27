import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ISubscriptionModel } from '@features/customer-reporting/dashboard/models/i-subscription';
import { SubscriptionService } from '@features/customer-reporting/dashboard/services/subscription.service';

@Component({
	selector: 'app-subscriptions',
	templateUrl: './subscriptions.component.html'
})
export class SubscriptionsComponent implements OnInit {
	@Input() public customerName: string;
	public dataAvailable: boolean;
	public subscriptions: ISubscriptionModel[];

	public constructor(
		private readonly _REF: ChangeDetectorRef,
		private readonly _SUBSCRIPTION_SERVICE: SubscriptionService
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._SUBSCRIPTION_SERVICE
			.getSubscriptions(this.customerName)
			.then((subscriptions: ISubscriptionModel[]) => {
				this.subscriptions = subscriptions;
				this.dataAvailable = true;
				this._REF.detectChanges();
			})
			.catch((err: Error): void => {
				throw err;
			});
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
