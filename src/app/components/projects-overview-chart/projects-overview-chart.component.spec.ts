import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsOverviewService } from '@application/services/projects-overview.service';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { ProjectsOverviewChartComponent } from './projects-overview-chart.component';
chai.use(dirtyChai);

describe('Projects overview chart component', () => {
	let component: ProjectsOverviewChartComponent;
	let fixture: ComponentFixture<ProjectsOverviewChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProjectsOverviewChartComponent],
			imports: [ChartsModule],
			providers: [ProjectsOverviewService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(ProjectsOverviewChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the projects overview chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
