// tslint:disable:no-magic-numbers prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISatisfactionModel } from '@features/global-reporting/dashboard/models/i-satisfaction';
import { SatisfactionViewModel } from '@features/global-reporting/dashboard/view-models/satisfaction-view-model';

// TODO: Mocking - We have no explanations from Universign
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

	// TODO : Api Call
	public async getSatisfaction(): Promise<SatisfactionViewModel[]> {
		return new Promise<SatisfactionViewModel[]>(
			(
				resolve: (satisfaction: SatisfactionViewModel[]) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: ISatisfactionModel[]): SatisfactionViewModel[] {
		const SATISFACTION_VIEW_MODEL: SatisfactionViewModel[] = [];
		for (const SATISFACTION of res) {
			SATISFACTION_VIEW_MODEL.push(new SatisfactionViewModel({ ...SATISFACTION }));
		}
		return SATISFACTION_VIEW_MODEL;
	}
}
