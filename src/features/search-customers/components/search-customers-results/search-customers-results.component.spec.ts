import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { SmartTableStubComponent } from '@application/testing/smart-table.component.stub';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { SearchCustomersResultsComponent } from './search-customers-results.component';
chai.use(dirtyChai);

describe('Search customers - Results component', () => {
	let component: SearchCustomersResultsComponent;
	let fixture: ComponentFixture<SearchCustomersResultsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchCustomersResultsComponent, SmartTableStubComponent],
			imports: [GlobalModule],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SearchCustomersResultsComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the search customers results component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
