import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { InvoicesService } from '@application/services/invoices.service';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { InvoicesChartComponent } from './invoices-chart.component';
chai.use(dirtyChai);

describe('Invoices chart component', () => {
	let component: InvoicesChartComponent;
	let fixture: ComponentFixture<InvoicesChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InvoicesChartComponent],
			imports: [ChartsModule],
			providers: [InvoicesService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(InvoicesChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the invoices chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
