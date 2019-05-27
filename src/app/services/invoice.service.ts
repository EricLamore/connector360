// tslint:disable:prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInvoiceModel } from '@application/models/i-invoice';
import { InvoiceViewModel } from '@application/view-models/invoice-view-model';

// TODO: Mocking - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class InvoiceService {
	public mock: IInvoiceModel[] = [
		{
			client: 'AFTA',
			date: new Date('2019-08-07'),
			name: 'UNV_DEC',
			price: '10000,56€',
			status: 'Payée'
		},
		{
			client: 'Fin. Brousoufe',
			date: new Date('2019-08-05'),
			name: 'UNIV_DEC',
			price: '5589,18€',
			status: 'Payée'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-07-25'),
			name: 'UNV_DEC',
			price: '500,80€',
			status: 'En attente'
		},
		{
			client: 'Fin. Brousouf',
			date: new Date('2019-07-15'),
			name: 'UNIV_DEC',
			price: '5589,18€',
			status: 'Payée'
		},

		{
			client: 'Assurance Rouge',
			date: new Date('2019-07-07'),
			name: 'UNIV_NOV',
			price: '500,72€',
			status: 'Annulée'
		},
		{
			client: 'AFTA',
			date: new Date('2019-06-15'),
			name: 'UNV_DEC',
			price: '10000,56€',
			status: 'Payée'
		},
		{
			client: 'Fin. Brousouf',
			date: new Date('2019-06-04'),
			name: 'UNIV_DEC',
			price: '5589,18€',
			status: 'Payée'
		}
	];

	public clientExample: string = 'Mutuelle Bleue';
	public mockClient: IInvoiceModel[] = [
		{
			client: this.clientExample,
			date: new Date('2019-01-20'),
			name: 'UNV_DEC',
			price: '500,80€',
			status: 'En attente'
		},
		{
			client: this.clientExample,
			date: new Date('2018-12-15'),
			name: 'UNV_DEC',
			price: '80000,56€',
			status: 'Payée'
		},
		{
			client: this.clientExample,
			date: new Date('2018-12-15'),
			name: 'UNV_DEC',
			price: '5589,18€',
			status: 'Payée'
		},
		{
			client: this.clientExample,
			date: new Date('2018-12-10'),
			name: 'UNV_DEC',
			price: '500,72€',
			status: 'Annulée'
		},
		{
			client: this.clientExample,
			date: new Date('2019-01-01'),
			name: 'UNV_DEC',
			price: '500€',
			status: 'Annulée'
		},
		{
			client: this.clientExample,
			date: new Date('2019-01-01'),
			name: 'UNV_DEC',
			price: '1000€',
			status: 'Payée'
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	// TODO : Api Call
	public async getInvoices(): Promise<InvoiceViewModel[]> {
		return new Promise<InvoiceViewModel[]>(
			(resolve: (invoices: InvoiceViewModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				// this._HTTP.get(`${this._url}/invoices`).subscribe((res: Invoice[]) => {
				/* const RES_MOCK: Invoice[] = this.getInvoicesMock(); // replace res
				resolve(this.formatData(RES_MOCK)); */
				resolve(this.formatData(this.mock));
				/*},
          (error: HttpErrorResponse) => {
            reject(error);
          }
        );*/
			}
		);
	}

	// TODO : Api Call
	public async getInvoicesByClient(customerName: string): Promise<InvoiceViewModel[]> {
		return new Promise<InvoiceViewModel[]>(
			(resolve: (invoices: InvoiceViewModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				// this._HTTP.get(`${this._url}/${customerName}/invoices`).subscribe((res: Invoice[]) => {
				/* const RES_MOCK: Invoice[] = this.getInvoicesCustomerMock(); // replace res
				resolve(this.formatData(RES_MOCK));*/
				resolve(this.formatData(this.mockClient));
				/*},
          (error: HttpErrorResponse) => {
            reject(error);
          }
        );*/
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: IInvoiceModel[]): InvoiceViewModel[] {
		const INVOICES_VIEW_MODEL: InvoiceViewModel[] = [];
		for (const INVOICE of res) {
			INVOICES_VIEW_MODEL.push(new InvoiceViewModel({ ...INVOICE }));
		}
		return INVOICES_VIEW_MODEL;
	}

	/*
	public getInvoicesGlobalMock(): Invoice[] {
	    return [
	      // {
	        customerName: 'Mutuelle Bleue',
	        sendDate: new Date('2019-01-20'),
	        name: 'UNV_DEC',
	        price: '500,80€',
	        status: Invoice.StatusEnum.SENT
	      },
	      {
	        client: 'AFTA',
	        date: new Date('2018-12-15'),
	        name: 'UNV_DEC',
	        price: '80000,56€',
	        status: Invoice.StatusEnum.PAID
	      },
	      {
	        client: 'Fin. Brousouf',
	        date: new Date('2018-12-15'),
	        name: 'UNIV_DEC',
	        price: '5589,18€',
	        status: Invoice.StatusEnum.UNPAID
	      },
	      {
	        client: 'Assurance Rouge',
	        date: new Date('2018-12-10'),
	        name: 'UNIV_NOV',
	        price: '500,72€',
	        status: Invoice.StatusEnum.VALIDATED
	      }
		];
	}

	public getInvoicesCustomerMock(): Invoice[] {
		return [
			{
				customerName: 'Mutuelle Bleue',
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
			}
		];
	}*/
}
