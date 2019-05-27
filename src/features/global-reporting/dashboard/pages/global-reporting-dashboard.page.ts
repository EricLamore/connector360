import { Component } from '@angular/core';
import { Categories } from '@application/enums/categories';

@Component({
	templateUrl: './global-reporting-dashboard.page.html'
})
export class GlobalReportingDashboardPage {
	public readonly categories: typeof Categories = Categories;
}
