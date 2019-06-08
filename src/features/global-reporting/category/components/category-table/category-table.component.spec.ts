import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICategory } from '@features/global-reporting/category/models/i-category';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CategoryTableComponent } from './category-table.component';
chai.use(dirtyChai);

describe('Category table component', () => {
	let component: CategoryTableComponent<ICategory>;
	let fixture: ComponentFixture<CategoryTableComponent<ICategory>>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CategoryTableComponent, SmartTableComponent],
			imports: [Ng2SmartTableModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(CategoryTableComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the category table component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
