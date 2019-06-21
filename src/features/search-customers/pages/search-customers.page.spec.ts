import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { SmartTableStubComponent } from '@application/testing/smart-table.component.stub';
import { SearchCustomersFormStubComponent } from '@features/search-customers/testing/search-customers-form.component.stub';
import { SearchCustomersResultsStubComponent } from '@features/search-customers/testing/search-customers-results.component.stub';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { SearchCustomersPage } from './search-customers.page';
chai.use(dirtyChai);

describe('Search customers page', () => {
	let component: SearchCustomersPage;
	let fixture: ComponentFixture<SearchCustomersPage>;

	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn(() => {
				return {
					matches: true
				};
			})
		});
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SearchCustomersPage,
				SearchCustomersFormStubComponent,
				SearchCustomersResultsStubComponent,
				SmartTableStubComponent
			],
			imports: [GlobalModule, RouterTestingModule],
			providers: [{ provide: MainLayout, useClass: MainStubLayout }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SearchCustomersPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the search customers page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
