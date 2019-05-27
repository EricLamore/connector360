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
import { UserCrm } from './userCrm';

export interface AccountCrm {
	accountId?: number;
	accountType?: string;
	activeCustomer?: boolean;
	createdDate?: Date;
	creationDate?: Date;
	creator?: UserCrm;
	deletedTime?: Date;
	description?: string;
	id?: number;
	modifiedDate?: Date;
	name?: string;
	ownerEmails?: string;
}