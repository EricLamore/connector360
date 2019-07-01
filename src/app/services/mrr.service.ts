// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMrrModel } from '@application/models/i-mrr';

@Injectable({
	providedIn: 'root'
})
export class MrrService {
	public mock: IMrrModel = {
		labels: [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Décembre'
		],
		datasets: [
			{
				data: [300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000],
				pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
				label: 'MRR prévisionnel'
			},
			{
				data: [10000, 20000, 40000, 50000, 70000, 100000, 110000, 160000, 200000, 220000, 250000, 270000],
				label: 'MRR réalisé'
			}
		]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async get(): Promise<IMrrModel> {
		return new Promise<IMrrModel>(
			(resolve: (mrr: IMrrModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<IMrrModel>((resolve: (mrr: IMrrModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: IMrrModel) => {
					//resolve(new MrrViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}
}
