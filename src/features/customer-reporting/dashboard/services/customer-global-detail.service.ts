// tslint:disable:prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerGlobalDetailModel } from '@features/customer-reporting/dashboard/models/i-customer-global-detail';
import { CustomerGlobalDetailViewModel } from '@features/customer-reporting/dashboard/view-models/customer-global-detail-view-model';

@Injectable({
	providedIn: 'root'
})
export class CustomerGlobalDetailService {
	public mock: ICustomerGlobalDetailModel = {
		mepDate: 'Mai 2017',
		titleMainRepresentative: 'Commercial',
		mainRepresentativeName: 'Jean Trim',
		tradeRepresentativeNames: 'Noémie Casme',
		projectRepresentativeNames: 'Samuel Bourdenoff, Noémie Casme',
		procurementRepresentativeNames: ''
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	// TODO : Api Call
	public async getCustomerGlobalDetails(customerName: string): Promise<CustomerGlobalDetailViewModel> {
		return new Promise<CustomerGlobalDetailViewModel>(
			(
				resolve: (customerGlobalDetails: CustomerGlobalDetailViewModel) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: ICustomerGlobalDetailModel): CustomerGlobalDetailViewModel {
		return new CustomerGlobalDetailViewModel(res);
	}
}
