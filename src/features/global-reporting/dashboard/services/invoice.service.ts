// tslint:disable:no-magic-numbers prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { MonthService } from '@application/services/month.service';
import { IInvoicesModel } from '@features/global-reporting/dashboard/models/i-invoices';
import { InvoicesViewModel } from '@features/global-reporting/dashboard/view-models/invoices-view-model';
import { TranslateService } from '@ngx-translate/core';

// TODO: Mocking - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class InvoiceService {
	public descriptionCustomer: string;
	public descriptionName: string;
	public descriptionDate: string;
	public descriptionPrice: string;
	public descriptionStatus: string;
	public mock: IInvoicesModel;

	private readonly _url: string = '@/';

	public constructor(
		private readonly _HTTP: HttpClient,
		private readonly _TRANSLATE_SERVICE: TranslateService,
		private readonly _MONTH_SERVICE: MonthService
	) {
		this._TRANSLATE_SERVICE.get(['invoice.info']).subscribe(() => {
			this.descriptionCustomer = this._TRANSLATE_SERVICE.instant('category.invoices.columns.customer');
			this.descriptionName = this._TRANSLATE_SERVICE.instant('category.invoices.columns.name');
			this.descriptionDate = this._TRANSLATE_SERVICE.instant('category.invoices.columns.date');
			this.descriptionPrice = this._TRANSLATE_SERVICE.instant('category.invoices.columns.price');
			this.descriptionStatus = this._TRANSLATE_SERVICE.instant('category.invoices.columns.status');
			const NB_MONTHS: number = 3;
			this.mock = {
				labels: [...this._MONTH_SERVICE.getSectionOfMonths(NB_MONTHS).reverse()],
				datasets: [
					[
						{
							data: [1200],
							backgroundColor: UniversignColorStates.OK,
							hoverBackgroundColor: UniversignColorStates.OK,
							label: `${this.descriptionCustomer}: AFTA|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 07-08-19|${this.descriptionPrice}: 10000.56 €|${this.descriptionStatus}: Payée`
						},
						{
							data: [5600],
							backgroundColor: UniversignColorStates.OK,
							hoverBackgroundColor: UniversignColorStates.OK,
							label: `${this.descriptionCustomer}: Fin. Brousouf|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 05-08-19|${this.descriptionPrice}: 5589.18 €|${this.descriptionStatus}: Payée`
						}
					],
					[
						{
							data: [250],
							backgroundColor: UniversignColorStates.WARNING,
							hoverBackgroundColor: UniversignColorStates.WARNING,
							label: `${this.descriptionCustomer}: Mutuelle Bleue|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 25-07-19|${this.descriptionPrice}: 500.80 €|${this.descriptionStatus}: En attente`
						},
						{
							data: [3000],
							backgroundColor: UniversignColorStates.OK,
							hoverBackgroundColor: UniversignColorStates.OK,
							label: `${this.descriptionCustomer}: Fin. Brousouf|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 15-07-19|${this.descriptionPrice}: 5589.18 €|${this.descriptionStatus}: Payée`
						},
						{
							data: [250],
							backgroundColor: UniversignColorStates.OTHERS,
							hoverBackgroundColor: UniversignColorStates.OTHERS,
							label: `${this.descriptionCustomer}: Assurance Rouge|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 07-07-19|${this.descriptionPrice}: 500.72 €|${this.descriptionStatus}: Annulée`
						}
					],
					[
						{
							data: [5000],
							backgroundColor: UniversignColorStates.OTHERS,
							hoverBackgroundColor: UniversignColorStates.OTHERS,
							label: `${this.descriptionCustomer}: AFTA|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 15-06-19|${this.descriptionPrice}: 10000.56 €|${this.descriptionStatus}: Payée`
						},
						{
							data: [800],
							backgroundColor: UniversignColorStates.OK,
							hoverBackgroundColor: UniversignColorStates.OK,
							label: `${this.descriptionCustomer}: Fin. Brousouf|${this.descriptionName}: UNV_DEC|${this.descriptionDate}: 04-06-19|${this.descriptionPrice}: 5589.18 €|${this.descriptionStatus}: Payée`
						}
					]
				]
			};
		});
	}

	// TODO : Api Call
	public async getInvoices(): Promise<InvoicesViewModel> {
		return new Promise<InvoicesViewModel>(
			(resolve: (invoices: InvoicesViewModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: IInvoicesModel): InvoicesViewModel {
		return new InvoicesViewModel({ ...res });
	}
}
