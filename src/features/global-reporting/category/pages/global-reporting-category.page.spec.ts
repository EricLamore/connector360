import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayout } from '@application/pages';
import { InvoiceService } from '@application/services/invoice.service';
import { ProjectService } from '@application/services/project.service';
import { TicketDetailService } from '@application/services/ticketDetail.service';
import { CategoryTableStubComponent } from '@application/testing/category-table.component.stub';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { TranslateModule } from '@ngx-translate/core';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { GlobalReportingCategoryPage } from './global-reporting-category.page';
chai.use(dirtyChai);

describe('Global Reporting - Category page', () => {
	let component: GlobalReportingCategoryPage;
	let fixture: ComponentFixture<GlobalReportingCategoryPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CategoryTableStubComponent, GlobalReportingCategoryPage],
			imports: [RouterTestingModule, TranslateModule.forRoot()],
			providers: [
				{ provide: MainLayout, useClass: MainStubLayout },
				InvoiceService,
				ProjectService,
				TicketDetailService,
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
