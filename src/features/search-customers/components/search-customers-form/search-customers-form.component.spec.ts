import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { NbDatepickerModule, NbThemeModule } from '@nebular/theme';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { SearchCustomersFormComponent } from './search-customers-form.component';
chai.use(dirtyChai);

describe('Search customers - Form component', () => {
	let component: SearchCustomersFormComponent;
	let fixture: ComponentFixture<SearchCustomersFormComponent>;

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
			declarations: [SearchCustomersFormComponent],
			imports: [GlobalModule, NbThemeModule.forRoot(), NbDatepickerModule.forRoot()],
			providers: []
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SearchCustomersFormComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the search customers form component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
