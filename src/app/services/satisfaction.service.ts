// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { ISatisfactionModel } from '@application/models/i-satisfaction';

@Injectable({
	providedIn: 'root'
})
export class SatisfactionService {
	public mock: ISatisfactionModel[] = [
		{
			y: 90,
			target: 95
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getSatisfaction(): Promise<ISatisfactionModel[]> {
		return new Promise<ISatisfactionModel[]>(
			(
				resolve: (satisfaction: ISatisfactionModel[]) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<ISatisfactionModel[]>((resolve: (satisfaction: ISatisfactionModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: ISatisfactionModel[]) => {
					//resolve(new SatisfactionViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}
}
