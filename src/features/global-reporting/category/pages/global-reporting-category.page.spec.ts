import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayout } from '@application/pages';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { InvoiceService } from '@features/global-reporting/category/services/invoice.service';
import { ProjectService } from '@features/global-reporting/category/services/project.service';
import { TicketService } from '@features/global-reporting/category/services/ticket.service';
import { CategoryTableStubComponent } from '@features/global-reporting/category/testing/category-table.component.stub';
import { CustomerCategoryTableStubComponent } from '@features/global-reporting/category/testing/customer-category-table.component.stub';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { GlobalReportingCategoryPage } from './global-reporting-category.page';
chai.use(dirtyChai);

describe('Global Reporting - Category page', () => {
	let component: GlobalReportingCategoryPage;
	let fixture: ComponentFixture<GlobalReportingCategoryPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CategoryTableStubComponent, CustomerCategoryTableStubComponent, GlobalReportingCategoryPage],
			imports: [RouterTestingModule],
			providers: [
				{ provide: MainLayout, useClass: MainStubLayout },
				InvoiceService,
				ProjectService,
				TicketService,
				{ provide: HttpClient },
				DatePipe
			]
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
