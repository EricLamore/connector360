import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayout } from '@application/pages';
import { InvoiceService } from '@application/services/invoice.service';
import { ProjectService } from '@application/services/project.service';
import { TicketDetailService } from '@application/services/ticketDetail.service';
import { MainStubLayout } from '@application/testing/main.layout.stub';
import { SmartTableStubComponent } from '@application/testing/smart-table.component.stub';
import { TranslateModule } from '@ngx-translate/core';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CategoryTableComponent } from './category-table.component';
chai.use(dirtyChai);

describe('Category table component', () => {
	let component: CategoryTableComponent;
	let fixture: ComponentFixture<CategoryTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CategoryTableComponent, SmartTableStubComponent],
			imports: [Ng2SmartTableModule, RouterTestingModule, TranslateModule.forRoot()],
			providers: [
				DatePipe,
				InvoiceService,
				ProjectService,
				TicketDetailService,
				{ provide: MainLayout, useClass: MainStubLayout },
				{ provide: HttpClient }
			]
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
