import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsTableClientComponent } from '@features/global-reporting/projects/components/projects-table-client/projects-table-client.component';
import { ProjectsTableComponent } from '@features/global-reporting/projects/components/projects-table/projects-table.component';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbLayoutModule, NbSearchModule } from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GlobalReportingProjectsPage } from './global-reporting-projects.page';
chai.use(dirtyChai);

describe('Projects page', () => {
	let component: GlobalReportingProjectsPage;
	let fixture: ComponentFixture<GlobalReportingProjectsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ProjectsTableClientComponent,
				ProjectsTableComponent,
				GlobalReportingProjectsPage,
				SmartTableComponent
			],
			imports: [Ng2SmartTableModule, NbLayoutModule, NbSearchModule, RouterTestingModule],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(GlobalReportingProjectsPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the projects page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
