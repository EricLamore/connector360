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
import { Collaborator } from './collaborator';
import { Comment } from './comment';
import { CustomFieldValue } from './customFieldValue';
import { Requester } from './requester';
import { SatisfactionRating } from './satisfactionRating';
import { Via } from './via';

export interface Ticket {
	assigneeId?: number;
	brandId?: number;
	collaboratorIds?: Array<number>;
	collaborators?: Array<Collaborator>;
	comment?: Comment;
	createdAt?: Date;
	customFields?: Array<CustomFieldValue>;
	description?: string;
	dueAt?: Date;
	externalId?: string;
	followupIds?: Array<number>;
	forumTopicId?: number;
	groupId?: number;
	hasIncidents?: boolean;
	id?: number;
	isPublic?: boolean;
	organizationId?: number;
	priority?: Ticket.PriorityEnum;
	problemId?: number;
	recipient?: string;
	requester?: Requester;
	requesterId?: number;
	satisfactionRating?: SatisfactionRating;
	sharingAgreementIds?: Array<number>;
	status?: Ticket.StatusEnum;
	subject?: string;
	submitterId?: number;
	tags?: Array<string>;
	ticketFormId?: number;
	type?: Ticket.TypeEnum;
	updatedAt?: Date;
	url?: string;
	via?: Via;
	viaFollowupSourceId?: number;
}
export namespace Ticket {
	export type PriorityEnum = 'urgent' | 'high' | 'normal' | 'low';
	export const PriorityEnum = {
		Urgent: 'urgent' as PriorityEnum,
		High: 'high' as PriorityEnum,
		Normal: 'normal' as PriorityEnum,
		Low: 'low' as PriorityEnum
	};
	export type StatusEnum = 'new' | 'open' | 'pending' | 'hold' | 'solved' | 'closed' | 'deleted';
	export const StatusEnum = {
		New: 'new' as StatusEnum,
		Open: 'open' as StatusEnum,
		Pending: 'pending' as StatusEnum,
		Hold: 'hold' as StatusEnum,
		Solved: 'solved' as StatusEnum,
		Closed: 'closed' as StatusEnum,
		Deleted: 'deleted' as StatusEnum
	};
	export type TypeEnum = 'problem' | 'incident' | 'question' | 'task';
	export const TypeEnum = {
		Problem: 'problem' as TypeEnum,
		Incident: 'incident' as TypeEnum,
		Question: 'question' as TypeEnum,
		Task: 'task' as TypeEnum
	};
}
