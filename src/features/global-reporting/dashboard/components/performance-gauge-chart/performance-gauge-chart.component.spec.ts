import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { PerformanceGaugeChartComponent } from './performance-gauge-chart.component';
chai.use(dirtyChai);

describe('Performance gauge chart component', () => {
	let component: PerformanceGaugeChartComponent;
	let fixture: ComponentFixture<PerformanceGaugeChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformanceGaugeChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(PerformanceGaugeChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the performance gauge chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
