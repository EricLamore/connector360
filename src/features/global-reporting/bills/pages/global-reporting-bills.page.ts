import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	templateUrl: './global-reporting-bills.page.html'
})
export class GlobalReportingBillsPage implements OnInit {
	public client: string;

	public constructor(private readonly _ROUTE: ActivatedRoute) {}

	public ngOnInit(): void {
		if (this._ROUTE.snapshot.paramMap.get('client') == null) {
			this.client = '';
		} else {
			this.client = this._ROUTE.snapshot.paramMap.get('client');
		}
	}

	public hasClient(): boolean {
		return this.client !== '';
	}
}
