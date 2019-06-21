import { NgModule } from '@angular/core';
import { SharedModule } from '@application/modules/utilities/shared.module';
import { SearchCustomersFormComponent } from '@features/search-customers/components/search-customers-form/search-customers-form.component';
import { SearchCustomersResultsComponent } from '@features/search-customers/components/search-customers-results/search-customers-results.component';
import { SearchCustomersPage } from '@features/search-customers/pages/search-customers.page';
import { SearchCustomersFeatureRoutingModule } from './search-customers-feature-routing.module';

@NgModule({
	declarations: [SearchCustomersFormComponent, SearchCustomersResultsComponent, SearchCustomersPage],
	imports: [SearchCustomersFeatureRoutingModule, SharedModule],
	providers: []
})
export class SearchCustomersFeatureModule {}
