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
import { Customer } from './customer';
import { Pageable } from './pageable';
import { Sort } from './sort';

export interface PageCustomer {
	content?: Array<Customer>;
	empty?: boolean;
	first?: boolean;
	last?: boolean;
	number?: number;
	numberOfElements?: number;
	pageable?: Pageable;
	size?: number;
	sort?: Sort;
	totalElements?: number;
	totalPages?: number;
}