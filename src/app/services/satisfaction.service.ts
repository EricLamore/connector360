// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UniversignColorStates from '@application/enums/universign-color-states';
import { ISatisfactionModel } from '@application/models/i-satisfaction';

@Injectable({
	providedIn: 'root'
})
export class SatisfactionService {
	public mock: ISatisfactionModel = {
		plotBands: [
			{
				from: 0,
				to: 50,
				color: UniversignColorStates.DANGEROUS
			},
			{
				from: 50,
				to: 75,
				color: UniversignColorStates.WARNING
			},
			{
				from: 75,
				to: 90,
				color: UniversignColorStates.OTHERS
			},
			{
				from: 90,
				to: 100,
				color: UniversignColorStates.OK
			}
		]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getSatisfaction(): Promise<ISatisfactionModel> {
		return new Promise<ISatisfactionModel>(
			(
				resolve: (satisfactions: ISatisfactionModel) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.mock);
			}
		);
	}
}
