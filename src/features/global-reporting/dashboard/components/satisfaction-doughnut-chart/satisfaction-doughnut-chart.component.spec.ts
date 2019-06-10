import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { SatisfactionDoughnutChartComponent } from './satisfaction-doughnut-chart.component';
chai.use(dirtyChai);

describe('Satisfaction doughnut chart component', () => {
	let component: SatisfactionDoughnutChartComponent;
	let fixture: ComponentFixture<SatisfactionDoughnutChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SatisfactionDoughnutChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SatisfactionDoughnutChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the satisfaction doughnut chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
