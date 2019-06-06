import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import { NbLayoutModule, NbSearchModule, NbThemeModule } from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProjectsTableClientComponent } from './projects-table-client.component';
chai.use(dirtyChai);

describe('Projects table client component', () => {
	let component: ProjectsTableClientComponent;
	let fixture: ComponentFixture<ProjectsTableClientComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProjectsTableClientComponent, SmartTableComponent],
			imports: [
				Ng2SmartTableModule,
				NbLayoutModule,
				NbSearchModule,
				NbThemeModule.forRoot(),
				RouterTestingModule
			],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(ProjectsTableClientComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the projects table client component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
