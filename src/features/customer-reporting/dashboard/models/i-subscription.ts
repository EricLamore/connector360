import { RatePlanCharge } from '@application/models/universign/ratePlanCharge';

export interface ISubscriptionModel {
	name: string;
	base: number;
	productType: string;
	ratePlanCharges: RatePlanCharge[];
}
