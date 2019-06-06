import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartTableComponent } from '@features/global-reporting/smart-table/components/smart-table.component';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProjectsTableComponent } from './projects-table.component';
chai.use(dirtyChai);

describe('Projects table component', () => {
	let component: ProjectsTableComponent;
	let fixture: ComponentFixture<ProjectsTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProjectsTableComponent, SmartTableComponent],
			imports: [Ng2SmartTableModule],
			providers: [DatePipe]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(ProjectsTableComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the projects table component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
