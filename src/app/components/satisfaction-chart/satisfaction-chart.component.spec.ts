import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { SatisfactionChartComponent } from './satisfaction-chart.component';
chai.use(dirtyChai);

describe('Satisfaction chart component', () => {
	let component: SatisfactionChartComponent;
	let fixture: ComponentFixture<SatisfactionChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SatisfactionChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SatisfactionChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the satisfaction chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
