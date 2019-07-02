import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsService } from '@application/services/tickets.service';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { TicketsChartComponent } from './tickets-chart.component';
chai.use(dirtyChai);

describe('Tickets chart component', () => {
	let component: TicketsChartComponent;
	let fixture: ComponentFixture<TicketsChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TicketsChartComponent],
			imports: [ChartsModule],
			providers: [TicketsService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(TicketsChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the tickets chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
