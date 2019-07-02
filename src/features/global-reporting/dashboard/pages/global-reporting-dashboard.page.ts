import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	templateUrl: './global-reporting-dashboard.page.html'
})
export class GlobalReportingDashboardPage {
	public constructor(private readonly _ROUTER: Router) {}

	public goToClientInvoices(client: string): void {
		this._ROUTER.navigate([`/global-reporting/invoices/${client}`]);
	}

	public goToClientProjects(client: string): void {
		this._ROUTER.navigate([`/global-reporting/projects/${client}`]);
	}
}
