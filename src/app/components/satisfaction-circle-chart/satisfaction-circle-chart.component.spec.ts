import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { SatisfactionCircleChartComponent } from './satisfaction-circle-chart.component';
chai.use(dirtyChai);

describe('Satisfaction circle chart component', () => {
	let component: SatisfactionCircleChartComponent;
	let fixture: ComponentFixture<SatisfactionCircleChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SatisfactionCircleChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SatisfactionCircleChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the satisfaction circle chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
