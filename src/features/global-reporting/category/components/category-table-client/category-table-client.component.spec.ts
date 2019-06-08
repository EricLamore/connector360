import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ICategory } from '@features/global-reporting/category/models/i-category';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbLayoutModule, NbSearchModule, NbThemeModule } from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CategoryTableClientComponent } from './category-table-client.component';
chai.use(dirtyChai);

describe('Category table client component', () => {
	let component: CategoryTableClientComponent<ICategory>;
	let fixture: ComponentFixture<CategoryTableClientComponent<ICategory>>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CategoryTableClientComponent, SmartTableComponent],
			imports: [Ng2SmartTableModule, NbLayoutModule, NbSearchModule, NbThemeModule.forRoot(), RouterTestingModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(CategoryTableClientComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the category table client component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
