import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { SignaturesChartComponent } from './signatures-chart.component';
chai.use(dirtyChai);

describe('Signatures chart component', () => {
	let component: SignaturesChartComponent;
	let fixture: ComponentFixture<SignaturesChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SignaturesChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SignaturesChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the signatures chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
