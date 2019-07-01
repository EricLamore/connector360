import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { InvoicesChartComponent } from './invoices-chart.component';
chai.use(dirtyChai);

describe('Projects overview chart component', () => {
	let component: InvoicesChartComponent;
	let fixture: ComponentFixture<InvoicesChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InvoicesChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(InvoicesChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the projects overview chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
