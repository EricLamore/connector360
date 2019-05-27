import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SatisfactionRating } from '@application/models/universign/satisfactionRating';
import { SatisfactionViewModel } from '@features/customer-reporting/dashboard/view-models/satisfaction-view-model';

@Injectable({
	providedIn: 'root'
})
export class SatisfactionService {
	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	// TODO : Api Call
	public async getSatisfaction(customerName: string): Promise<SatisfactionViewModel> {
		return new Promise<SatisfactionViewModel>(
			(
				resolve: (satisfaction: SatisfactionViewModel) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				// this._HTTP.get(`${this._url}/${customerName}`).subscribe((res: SatisfactionRating[]) => {
				const RES_MOCK: SatisfactionRating[] = this.getSatisfactionMock(); // replace res
				resolve(this.formatData(RES_MOCK));
				/*},
					(error: HttpErrorResponse) => {
						reject(error);
					}
				);*/
			}
		);
	}

	public formatData(res: SatisfactionRating[]): SatisfactionViewModel {
		const MAX_SCORE: number = 100;
		const FRACTION_DIGITS: number = 2;
		const NB_GOOD: number = res.reduce(
			(acc: number, satisfactionRating: SatisfactionRating) =>
				acc + (satisfactionRating.score === 'good' ? 1 : 0),
			0
		);
		const NB_BAD: number = res.reduce(
			(acc: number, satisfactionRating: SatisfactionRating) => acc + (satisfactionRating.score === 'bad' ? 1 : 0),
			0
		);
		const SCORE: number = Number(Number((NB_GOOD * MAX_SCORE) / (NB_GOOD + NB_BAD)).toFixed(FRACTION_DIGITS));
		return new SatisfactionViewModel({ data: [[SCORE, MAX_SCORE - SCORE]], text: `${SCORE}%` });
	}

	// TODO : Remove this function when the Api connection is done
	public getSatisfactionMock(): SatisfactionRating[] {
		return [
			{
				score: 'good'
			},
			{
				score: 'good'
			},
			{
				score: 'bad'
			},
			{
				score: 'bad'
			},
			{
				score: 'good'
			},
			{
				score: 'bad'
			},
			{
				score: 'bad'
			},
			{
				score: 'bad'
			}
		];
	}
}
