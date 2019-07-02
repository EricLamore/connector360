import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsTimelineService } from '@application/services/projects-timeline.service';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ProjectsTimelineChartComponent } from './projects-timeline-chart.component';
chai.use(dirtyChai);

describe('Projects timeline chart component', () => {
	let component: ProjectsTimelineChartComponent;
	let fixture: ComponentFixture<ProjectsTimelineChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProjectsTimelineChartComponent],
			imports: [],
			providers: [ProjectsTimelineService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(ProjectsTimelineChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the projects timeline chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
