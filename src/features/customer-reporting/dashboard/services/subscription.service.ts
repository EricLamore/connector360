// tslint:disable:no-big-function
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@application/models/universign/product';
import { RatePlan } from '@application/models/universign/ratePlan';
import { Subscription } from '@application/models/universign/subscription';
import { SubscriptionViewModel } from '@features/customer-reporting/dashboard/view-models/subscription-view-model';

@Injectable({
	providedIn: 'root'
})
export class SubscriptionService {
	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	// TODO : Api Call
	public async getSubscriptions(customerName: string): Promise<SubscriptionViewModel[]> {
		return new Promise<SubscriptionViewModel[]>(
			(
				resolve: (subscriptions: SubscriptionViewModel[]) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				// this._HTTP.get(`${this._url}/${customerName}`).subscribe((res: Subscription[]) => {
				const RES_MOCK: Subscription[] = this.getSubscriptionsMock(); // replace res
				resolve(this.formatData(RES_MOCK));
				/*},
					(error: HttpErrorResponse) => {
						reject(error);
					}
				);*/
			}
		);
	}

	public formatData(res: Subscription[]): SubscriptionViewModel[] {
		const SUBSCRIPTIONS_VIEW_MODEL: SubscriptionViewModel[] = [];
		for (const SUBSCRIPTION of res) {
			for (const RATE_PLAN of SUBSCRIPTION.ratePlans) {
				const {
					name: NAME,
					base: BASE,
					product: PRODUCT,
					ratePlanCharges: RATE_PLAN_CHARGES
				}: RatePlan = RATE_PLAN;
				SUBSCRIPTIONS_VIEW_MODEL.push(
					new SubscriptionViewModel({
						name: NAME,
						base: BASE,
						productType: PRODUCT.productType,
						ratePlanCharges: RATE_PLAN_CHARGES
					})
				);
			}
		}
		return SUBSCRIPTIONS_VIEW_MODEL;
	}

	// TODO : Remove this function when the Api connection is done
	public getSubscriptionsMock(): Subscription[] {
		const RATE_PLAN_NAME_V1: string = 'Modèle final 200 V1';
		const RATE_PLAN_NAME_V2: string = 'Modèle final 200 V2';
		return [
			{
				ratePlans: [
					{
						name: RATE_PLAN_NAME_V1,
						base: 200,
						product: {
							productType: Product.ProductTypeEnum.SIGNATURE
						},
						ratePlanCharges: [
							{ step: 0, unitPrice: 0.8 },
							{ step: 1001, unitPrice: 0.6 },
							{ step: 3001, unitPrice: 0.4 },
							{ step: 10001, unitPrice: 0.3 },
							{ step: 50001, unitPrice: 0.259 },
							{ step: 100001, unitPrice: 0.23 },
							{ step: 1000001, unitPrice: 0.2 }
						]
					},
					{
						name: RATE_PLAN_NAME_V1,
						base: 100,
						product: {
							productType: Product.ProductTypeEnum.TIMESTAMPING
						},
						ratePlanCharges: [
							{ step: 0, unitPrice: 0.8 },
							{ step: 1001, unitPrice: 0.6 },
							{ step: 3001, unitPrice: 0.4 },
							{ step: 10001, unitPrice: 0.3 },
							{ step: 50001, unitPrice: 0.259 },
							{ step: 100001, unitPrice: 0.23 },
							{ step: 1000001, unitPrice: 0.2 }
						]
					},
					{
						name: RATE_PLAN_NAME_V1,
						base: 150,
						product: {
							productType: Product.ProductTypeEnum.TRANSACTIONS
						},
						ratePlanCharges: [
							{ step: 0, unitPrice: 0.8 },
							{ step: 1001, unitPrice: 0.6 },
							{ step: 3001, unitPrice: 0.4 },
							{ step: 10001, unitPrice: 0.3 },
							{ step: 50001, unitPrice: 0.259 },
							{ step: 100001, unitPrice: 0.23 },
							{ step: 1000001, unitPrice: 0.2 }
						]
					}
				]
			},
			{
				ratePlans: [
					{
						name: RATE_PLAN_NAME_V2,
						base: 300,
						product: {
							productType: Product.ProductTypeEnum.SIGNATURE
						},
						ratePlanCharges: [
							{ step: 0, unitPrice: 0.8 },
							{ step: 1001, unitPrice: 0.6 },
							{ step: 3001, unitPrice: 0.4 },
							{ step: 10001, unitPrice: 0.3 },
							{ step: 50001, unitPrice: 0.259 },
							{ step: 100001, unitPrice: 0.23 },
							{ step: 1000001, unitPrice: 0.2 }
						]
					},
					{
						name: RATE_PLAN_NAME_V2,
						base: 400,
						product: {
							productType: Product.ProductTypeEnum.TIMESTAMPING
						},
						ratePlanCharges: [
							{ step: 0, unitPrice: 0.8 },
							{ step: 1001, unitPrice: 0.6 },
							{ step: 3001, unitPrice: 0.4 },
							{ step: 10001, unitPrice: 0.3 },
							{ step: 50001, unitPrice: 0.259 },
							{ step: 100001, unitPrice: 0.23 },
							{ step: 1000001, unitPrice: 0.2 }
						]
					},
					{
						name: RATE_PLAN_NAME_V2,
						base: 75,
						product: {
							productType: Product.ProductTypeEnum.TRANSACTIONS
						},
						ratePlanCharges: [
							{ step: 0, unitPrice: 0.8 },
							{ step: 1001, unitPrice: 0.6 },
							{ step: 3001, unitPrice: 0.4 },
							{ step: 10001, unitPrice: 0.3 },
							{ step: 50001, unitPrice: 0.259 },
							{ step: 100001, unitPrice: 0.23 },
							{ step: 1000001, unitPrice: 0.2 }
						]
					}
				]
			}
		];
	}
}
