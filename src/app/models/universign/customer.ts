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
import { Address } from './address';
import { Organization } from './organization';
import { PaymentMethod } from './paymentMethod';
import { PersonReferer } from './personReferer';
import { SettingsInvoice } from './settingsInvoice';
import { Subscription } from './subscription';

export interface Customer {
	address?: Address;
	billingAddress?: Address;
	customerId?: string;
	customerName?: string;
	description?: string;
	id?: string;
	isParticular?: boolean;
	lastUpdate?: Date;
	meansPayments?: Array<PaymentMethod>;
	name?: string;
	ownerId?: string;
	partner?: boolean;
	partnerId?: string;
	paymentMethodGlobal?: PaymentMethod;
	personReferers?: Array<PersonReferer>;
	settingsInvoice?: SettingsInvoice;
	siret?: string;
	subscriptions?: Array<Subscription>;
	taxNo?: string;
	thirdPartyAccountingCode?: string;
	usages?: Array<Organization>;
}
