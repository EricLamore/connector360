// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import InvoicesBarChartColor from '@application/enums/invoices-bar-chart-color';
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
				backgroundColor: InvoicesBarChartColor.NOTPAID,
				hoverBackgroundColor: InvoicesBarChartColor.NOTPAID,
				label: 'Client: Mutuelle Bleue | Nom: UNV_DEC | Date: 20-12-18 | Prix: 500.80 € | Status: En attente'
			},
			{
				data: [10000.56],
				backgroundColor: InvoicesBarChartColor.PAID,
				hoverBackgroundColor: InvoicesBarChartColor.PAID,
				label: 'Client: AFTA | Nom: UNV_DEC | Date: 16-12-18 | Prix: 10000.56 € | Status: Payée'
			},
			{
				data: [5589.18],
				backgroundColor: InvoicesBarChartColor.PAID,
				hoverBackgroundColor: InvoicesBarChartColor.PAID,
				label: 'Client: Fin. Brousouf | Nom: UNV_DEC | Date: 15-12-18 | Prix: 5589.18 € | Status: Payée'
			},
			{
				data: [500.72],
				backgroundColor: InvoicesBarChartColor.OTHERS,
				hoverBackgroundColor: InvoicesBarChartColor.OTHERS,
				label: 'Assurance Rouge | Nom: UNV_DEC | Date: 10-12-18 | Prix: 500.72 € | Status: Annulée'
			},
			{
				data: [500],
				backgroundColor: InvoicesBarChartColor.OTHERS,
				hoverBackgroundColor: InvoicesBarChartColor.OTHERS,
				label: 'xxx | Nom: UNV_DEC | Date: 02-12-18 | Prix: 500 € | Status: Annulée'
			},
			{
				data: [1000],
				backgroundColor: InvoicesBarChartColor.PAID,
				hoverBackgroundColor: InvoicesBarChartColor.PAID,
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
	}
}
