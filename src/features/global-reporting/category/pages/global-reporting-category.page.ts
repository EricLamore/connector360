import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	templateUrl: './global-reporting-category.page.html'
})
export class GlobalReportingCategoryPage implements OnInit {
	public category: string;
	public customerName: string;

	public constructor(private readonly _ROUTE: ActivatedRoute) {}

	public ngOnInit(): void {
		this._ROUTE.paramMap.subscribe((params: ParamMap) => {
			this.category = params.get('category');
			this.customerName = '';
		});
	}
}
