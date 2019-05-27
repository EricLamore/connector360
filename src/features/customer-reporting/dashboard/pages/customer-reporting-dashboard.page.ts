import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Categories } from '@application/enums/categories';
import { Chart } from 'chart.js';

@Component({
	templateUrl: './customer-reporting-dashboard.page.html'
})
export class CustomerReportingDashboardPage implements OnInit {
	public readonly categories: typeof Categories = Categories;
	public customerName: string;

	public constructor(private readonly _ROUTE: ActivatedRoute) {}

	public ngOnInit(): void {
		this._ROUTE.paramMap.subscribe((params: ParamMap) => {
			this.customerName = params.get('customerName');
		});
	}
}
