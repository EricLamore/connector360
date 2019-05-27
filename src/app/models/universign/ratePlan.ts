/**
 * REST API For Vision 360
 * API in front of CRM (Nutshell) PPM(Clarizen) and billing
 *
 * OpenAPI spec version: 1.0
 * Contact: eric.lamore@universsign.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Feature } from './feature';
import { Product } from './product';
import { ProductRatePlanCharge } from './productRatePlanCharge';
import { RatePlanCharge } from './ratePlanCharge';
import { SubscriptionFeature } from './subscriptionFeature';

export interface RatePlan {
	activationDate?: Date;
	base?: number;
	commercialName?: string;
	description?: string;
	discountBase?: number;
	discountUnitPrice?: number;
	endDate?: Date;
	features?: Array<Feature>;
	fixedPrice?: boolean;
	id?: string;
	lastUpdate?: Date;
	name?: string;
	product?: Product;
	productRatePlanCharge?: Array<ProductRatePlanCharge>;
	prorata?: number;
	ratePlanCharges?: Array<RatePlanCharge>;
	ratePlanId?: string;
	standardModel?: boolean;
	subscriptionFeatures?: Array<SubscriptionFeature>;
	unitsIncluded?: number;
	unitsIncludedDuration?: number;
	unitsIncludedPrice?: number;
	version?: string;
}