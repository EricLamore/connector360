import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCustomersPage } from '@features/search-customers/pages/search-customers.page';

const SEARCH_CUSTOMERS_ROUTES: Routes = [
	{
		component: SearchCustomersPage,
		path: ''
	}
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(SEARCH_CUSTOMERS_ROUTES)]
})
export class SearchCustomersFeatureRoutingModule {}
