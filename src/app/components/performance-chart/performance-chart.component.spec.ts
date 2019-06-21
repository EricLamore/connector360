import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { PerformanceChartComponent } from './performance-chart.component';
chai.use(dirtyChai);

describe('Performance chart component', () => {
	let component: PerformanceChartComponent;
	let fixture: ComponentFixture<PerformanceChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformanceChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(PerformanceChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the performance chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
