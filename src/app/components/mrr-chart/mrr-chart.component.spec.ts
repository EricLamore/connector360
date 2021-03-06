import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MrrService } from '@application/services/mrr.service';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { MrrChartComponent } from './mrr-chart.component';
chai.use(dirtyChai);

describe('MRR chart component', () => {
	let component: MrrChartComponent;
	let fixture: ComponentFixture<MrrChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MrrChartComponent],
			imports: [ChartsModule],
			providers: [MrrService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(MrrChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the MRR chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
