// tslint:disable:no-identical-functions no-big-function
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumption } from '@application/models/universign/consumption';
import { MonthService } from '@application/services/month.service';
import { ProductsViewModel } from '@application/view-models/products-view-model';
import { TranslateService } from '@ngx-translate/core';
import { ChartDataSets } from 'chart.js';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private readonly _url: string = '@/';

	public constructor(
		private readonly _HTTP: HttpClient,
		private readonly _MONTH_SERVICE: MonthService,
		private readonly _TRANSLATE_SERVICE: TranslateService
	) {}

	// TODO : Api Call
	public async getProducts(): Promise<ProductsViewModel> {
		return new Promise<ProductsViewModel>(
			(resolve: (products: ProductsViewModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				// this._HTTP.get(`${this._url}`).subscribe((res: Consumption[]) => {
				const RES_MOCK: Consumption[] = this.getProductsMock(); // replace res
				this._TRANSLATE_SERVICE.get(['months']).subscribe(() => {
					resolve(this.formatData(RES_MOCK));
				});
				/*},
					(error: HttpErrorResponse) => {
						reject(error);
					}
				);*/
			}
		);
	}

	// TODO : Api Call
	public async getProductsByClient(customerName: string): Promise<ProductsViewModel> {
		return new Promise<ProductsViewModel>(
			(resolve: (products: ProductsViewModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				// this._HTTP.get(`${this._url}/${customerName}`).subscribe((res: Consumption[]) => {
				const RES_MOCK: Consumption[] = this.getProductsMock(); // replace res
				this._TRANSLATE_SERVICE.get(['months']).subscribe(() => {
					resolve(this.formatData(RES_MOCK));
				});
				/*},
					(error: HttpErrorResponse) => {
						reject(error);
					}
				);*/
			}
		);
	}

	public formatData(res: Consumption[]): ProductsViewModel {
		const NB_MONTHS: number = 3;
		const MONTHS: number[] = this._MONTH_SERVICE.getLastMonthsNumber(NB_MONTHS);

		const LABELS: string[] = [...this._MONTH_SERVICE.getSectionOfMonths(NB_MONTHS)];

		const DATASETS: ChartDataSets[] = [];
		for (const TYPE of Object.keys(Consumption.ProductTypeEnum)) {
			const RES_BY_PRODUCTS: Consumption[] = res.filter((product: Consumption) => product.productType === TYPE);
			const DATA: number[] = [];
			for (const MONTH of MONTHS) {
				const VALUE: number = RES_BY_PRODUCTS.filter((product: Consumption) => product.month === MONTH).reduce(
					(acc: number, product: Consumption) => acc + product.nbUnits,
					0
				);
				DATA.push(VALUE);
			}
			if (!DATA.every((val: number) => val === 0)) {
				DATASETS.push({ data: DATA, label: TYPE });
			}
		}

		return new ProductsViewModel({ labels: LABELS, datasets: DATASETS });
	}

	// TODO : Remove this function when the Api connection is done
	public getProductsMock(): Consumption[] {
		return [
			{
				month: 5,
				year: 2019,
				nbUnits: 20000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.SIGNATURE
			},
			{
				month: 5,
				year: 2019,
				nbUnits: 30000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.SIGNATURE
			},
			{
				month: 5,
				year: 2019,
				nbUnits: 10000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TIMESTAMPING
			},
			{
				month: 5,
				year: 2019,
				nbUnits: 15000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TIMESTAMPING
			},
			{
				month: 5,
				year: 2019,
				nbUnits: 5000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TRANSACTIONS
			},
			{
				month: 5,
				year: 2019,
				nbUnits: 60000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TRANSACTIONS
			},
			{
				month: 6,
				year: 2019,
				nbUnits: 40000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.SIGNATURE
			},
			{
				month: 6,
				year: 2019,
				nbUnits: 60000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.SIGNATURE
			},
			{
				month: 6,
				year: 2019,
				nbUnits: 30000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TIMESTAMPING
			},
			{
				month: 6,
				year: 2019,
				nbUnits: 60000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TIMESTAMPING
			},
			{
				month: 6,
				year: 2019,
				nbUnits: 14000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TRANSACTIONS
			},
			{
				month: 6,
				year: 2019,
				nbUnits: 80000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TRANSACTIONS
			},
			{
				month: 7,
				year: 2019,
				nbUnits: 20000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.SIGNATURE
			},
			{
				month: 7,
				year: 2019,
				nbUnits: 24000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.SIGNATURE
			},
			{
				month: 7,
				year: 2019,
				nbUnits: 70000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TIMESTAMPING
			},
			{
				month: 7,
				year: 2019,
				nbUnits: 80000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TIMESTAMPING
			},
			{
				month: 7,
				year: 2019,
				nbUnits: 90000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TRANSACTIONS
			},
			{
				month: 7,
				year: 2019,
				nbUnits: 40000,
				productName: 'TEST',
				productType: Consumption.ProductTypeEnum.TRANSACTIONS
			}
		];
	}
}
