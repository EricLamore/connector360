import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CustomerGlobalDetailService } from '@features/customer-reporting/dashboard/services/customer-global-detail.service';
import { CustomerGlobalDetailViewModel } from '@features/customer-reporting/dashboard/view-models/customer-global-detail-view-model';

@Component({
	selector: 'app-customer-global-details',
	templateUrl: './customer-global-details.component.html'
})
export class CustomerGlobalDetailsComponent implements OnInit {
	public customerGlobalDetail: CustomerGlobalDetailViewModel;
	@Input() public customerName: string;
	public dataAvailable: boolean;

	public constructor(
		private readonly _REF: ChangeDetectorRef,
		private readonly _CUSTOMER_GLOBAL_DETAIL_SERVICE: CustomerGlobalDetailService
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._CUSTOMER_GLOBAL_DETAIL_SERVICE
			.getCustomerGlobalDetails(this.customerName)
			.then((customerGlobalDetails: CustomerGlobalDetailViewModel) => {
				this.customerGlobalDetail = customerGlobalDetails;
				this.dataAvailable = true;
				this._REF.detectChanges();
			})
			.catch((err: Error): void => {
				throw err;
			});
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}
