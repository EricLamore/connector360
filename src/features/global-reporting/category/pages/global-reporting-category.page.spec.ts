import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryTableClientComponent } from '@features/global-reporting/category/components/category-table-client/category-table-client.component';
import { CategoryTableComponent } from '@features/global-reporting/category/components/category-table/category-table.component';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbLayoutModule, NbSearchModule } from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingCategoryPage } from './global-reporting-category.page';
chai.use(dirtyChai);

describe('Category page', () => {
	let component: GlobalReportingCategoryPage;
	let fixture: ComponentFixture<GlobalReportingCategoryPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CategoryTableClientComponent,
				CategoryTableComponent,
				GlobalReportingCategoryPage,
				SmartTableComponent
			],
			imports: [Ng2SmartTableModule, NbLayoutModule, NbSearchModule, RouterTestingModule],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(GlobalReportingCategoryPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the category page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
