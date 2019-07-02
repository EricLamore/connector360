// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand no-duplicate-string
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInvoiceModel } from '@features/global-reporting/category/models/i-invoice';

@Injectable({
	providedIn: 'root'
})
export class InvoiceService {
	public mock: IInvoiceModel[] = [
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-20'),
			name: 'UNV_DEC',
			price: '500,80€',
			status: 'En attente'
		},
		{
			client: 'AFTA',
			date: new Date('2018-12-15'),
			name: 'UNV_DEC',
			price: '80000,56€',
			status: 'Payée'
		},
		{
			client: 'Fin. Brousouf',
			date: new Date('2018-12-15'),
			name: 'UNIV_DEC',
			price: '5589,18€',
			status: 'Payée'
		},
		{
			client: 'Assurance Rouge',
			date: new Date('2018-12-10'),
			name: 'UNIV_NOV',
			price: '500,72€',
			status: 'Annulée'
		},
		{
			client: 'xxx',
			date: new Date('2019-01-01'),
			name: 'xxx',
			price: '500€',
			status: 'Annulée'
		},
		{
			client: 'yyy',
			date: new Date('2019-01-01'),
			name: 'yyy',
			price: '1000€',
			status: 'Payée'
		}
	];

	public mockClient: IInvoiceModel[] = [
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-20'),
			name: 'UNV_DEC',
			price: '500,80€',
			status: 'En attente'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2018-12-15'),
			name: 'UNV_DEC',
			price: '80000,56€',
			status: 'Payée'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2018-12-15'),
			name: 'UNV_DEC',
			price: '5589,18€',
			status: 'Payée'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2018-12-10'),
			name: 'UNV_DEC',
			price: '500,72€',
			status: 'Annulée'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-01'),
			name: 'UNV_DEC',
			price: '500€',
			status: 'Annulée'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-01'),
			name: 'UNV_DEC',
			price: '1000€',
			status: 'Payée'
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getInvoices(): Promise<IInvoiceModel[]> {
		return new Promise<IInvoiceModel[]>(
			(resolve: (invoices: IInvoiceModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<IInvoiceModel>((resolve: (invoice: IInvoiceModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: IInvoiceModel) => {
					//resolve(new InvoiceViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}

	public async getInvoicesByClient(client: string): Promise<IInvoiceModel[]> {
		return new Promise<IInvoiceModel[]>(
			(resolve: (invoices: IInvoiceModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mockClient);
			}
		);
	}
}
