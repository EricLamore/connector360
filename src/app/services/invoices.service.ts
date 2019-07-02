// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UniversignColorStates from '@application/enums/universign-color-states';
import { IInvoicesModel } from '@application/models/i-invoices';

@Injectable({
	providedIn: 'root'
})
export class InvoicesService {
	public mock: IInvoicesModel = {
		labels: ['Décembre 2018'],
		datasets: [
			{
				data: [500.8],
				backgroundColor: UniversignColorStates.WARNING,
				hoverBackgroundColor: UniversignColorStates.WARNING,
				label: 'Client: Mutuelle Bleue | Nom: UNV_DEC | Date: 20-12-18 | Prix: 500.80 € | Status: En attente'
			},
			{
				data: [10000.56],
				backgroundColor: UniversignColorStates.OK,
				hoverBackgroundColor: UniversignColorStates.OK,
				label: 'Client: AFTA | Nom: UNV_DEC | Date: 16-12-18 | Prix: 10000.56 € | Status: Payée'
			},
			{
				data: [5589.18],
				backgroundColor: UniversignColorStates.OK,
				hoverBackgroundColor: UniversignColorStates.OK,
				label: 'Client: Fin. Brousouf | Nom: UNV_DEC | Date: 15-12-18 | Prix: 5589.18 € | Status: Payée'
			},
			{
				data: [500.72],
				backgroundColor: UniversignColorStates.OTHERS,
				hoverBackgroundColor: UniversignColorStates.OTHERS,
				label: 'Assurance Rouge | Nom: UNV_DEC | Date: 10-12-18 | Prix: 500.72 € | Status: Annulée'
			},
			{
				data: [500],
				backgroundColor: UniversignColorStates.OTHERS,
				hoverBackgroundColor: UniversignColorStates.OTHERS,
				label: 'xxx | Nom: UNV_DEC | Date: 02-12-18 | Prix: 500 € | Status: Annulée'
			},
			{
				data: [1000],
				backgroundColor: UniversignColorStates.OK,
				hoverBackgroundColor: UniversignColorStates.OK,
				label: 'yyy | Nom: UNV_DEC | Date: 01-12-18 | Prix: 1000 € | Status: Payée'
			}
		]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getInvoices(): Promise<IInvoicesModel> {
		return new Promise<IInvoicesModel>(
			(resolve: (invoices: IInvoicesModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<IInvoicesModel>((resolve: (mrr: IInvoicesModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: IInvoicesModel) => {
					//resolve(new InvoicesViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}
}
