import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search-customers',
	templateUrl: './search-customers.page.html'
})
export class SearchCustomersPage implements OnInit {
	public isSearchPage: boolean;

	public ngOnInit(): void {
		this.isSearchPage = true;
	}

	public onSubmitSearchPageClick(event: object): void {
		this.isSearchPage = !this.isSearchPage;
	}

	public onSubmitResultPageClick(): void {
		this.isSearchPage = !this.isSearchPage;
	}
}
