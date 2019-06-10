import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { SignaturesLineChartComponent } from './signatures-line-chart.component';
chai.use(dirtyChai);

describe('Signatures line chart component', () => {
	let component: SignaturesLineChartComponent;
	let fixture: ComponentFixture<SignaturesLineChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SignaturesLineChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SignaturesLineChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the signatures line chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
