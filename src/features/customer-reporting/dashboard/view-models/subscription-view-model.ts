import { RatePlanCharge } from '@application/models/universign/ratePlanCharge';
import { ISubscriptionModel } from '@features/customer-reporting/dashboard/models/i-subscription';

export class SubscriptionViewModel implements ISubscriptionModel {
	public name: string;
	public base: number;
	public productType: string;
	public ratePlanCharges: RatePlanCharge[];

	public constructor(data?: ISubscriptionModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: ISubscriptionModel): void {
		if (typeof data.name !== 'undefined') {
			this.name = data.name;
		}
		if (typeof data.base !== 'undefined') {
			this.base = data.base;
		}
		if (typeof data.productType !== 'undefined') {
			this.productType = data.productType;
		}
		if (typeof data.ratePlanCharges !== 'undefined') {
			this.ratePlanCharges = Array.from(data.ratePlanCharges);
		}
	}
}
