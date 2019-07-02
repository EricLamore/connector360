// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductsModel } from '@application/models/i-products';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	public mock: IProductsModel = {
		labels: ['Octobre', 'Novembre', 'Décembre', 'Janvier'],
		datasets: [{ data: [1200000, 1400000, 2200000, 1000000], label: 'Signatures' }]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async get(): Promise<IProductsModel> {
		return new Promise<IProductsModel>(
			(resolve: (products: IProductsModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
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
