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
import { AccountCrm } from './accountCrm';
import { EntityCrm } from './entityCrm';
import { NoteCrm } from './noteCrm';
import { ProductCrm } from './productCrm';
import { StagesetCrm } from './stagesetCrm';
import { UserCrm } from './userCrm';

export interface LeadCrm {
	accounts?: Array<EntityCrm>;
	assignee?: UserCrm;
	completion?: number;
	confidence?: number;
	contacts?: Array<EntityCrm>;
	createdDate?: Date;
	creator?: UserCrm;
	deletedTime?: Date;
	description?: string;
	dueTime?: Date;
	id?: number;
	modifiedDate?: Date;
	name?: string;
	nextStepDueTime?: Date;
	notes?: Array<NoteCrm>;
	primaryAccount?: AccountCrm;
	primaryAccountName?: string;
	primaryContactName?: string;
	priority?: number;
	products?: Array<ProductCrm>;
	sources?: Array<EntityCrm>;
	stageset?: StagesetCrm;
	status?: LeadCrm.StatusEnum;
	tags?: Array<string>;
}
export namespace LeadCrm {
	export type StatusEnum = 'OPEN' | 'PENDING' | 'WON' | 'LOST' | 'CANCELLED';
	export const StatusEnum = {
		OPEN: 'OPEN' as StatusEnum,
		PENDING: 'PENDING' as StatusEnum,
		WON: 'WON' as StatusEnum,
		LOST: 'LOST' as StatusEnum,
		CANCELLED: 'CANCELLED' as StatusEnum
	};
}