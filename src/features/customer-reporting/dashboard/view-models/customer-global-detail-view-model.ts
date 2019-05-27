import { ICustomerGlobalDetailModel } from '@features/customer-reporting/dashboard/models/i-customer-global-detail';

export class CustomerGlobalDetailViewModel implements ICustomerGlobalDetailModel {
	public mepDate: string;
	public titleMainRepresentative: string;
	public mainRepresentativeName: string;
	public tradeRepresentativeNames: string;
	public projectRepresentativeNames: string;
	public procurementRepresentativeNames: string;

	public constructor(data?: ICustomerGlobalDetailModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: ICustomerGlobalDetailModel): void {
		if (typeof data.mepDate !== 'undefined') {
			this.mepDate = data.mepDate;
		}
		if (typeof data.titleMainRepresentative !== 'undefined') {
			this.titleMainRepresentative = data.titleMainRepresentative;
		}
		if (typeof data.mainRepresentativeName !== 'undefined') {
			this.mainRepresentativeName = data.mainRepresentativeName;
		}
		if (typeof data.tradeRepresentativeNames !== 'undefined') {
			this.tradeRepresentativeNames = data.tradeRepresentativeNames;
		}
		if (typeof data.projectRepresentativeNames !== 'undefined') {
			this.projectRepresentativeNames = data.projectRepresentativeNames;
		}
		if (typeof data.procurementRepresentativeNames !== 'undefined') {
			this.procurementRepresentativeNames = data.procurementRepresentativeNames;
		}
	}
}
