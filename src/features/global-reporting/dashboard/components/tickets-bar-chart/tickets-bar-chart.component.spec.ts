import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { TicketsBarChartComponent } from './tickets-bar-chart.component';
chai.use(dirtyChai);

describe('Tickets bar chart component', () => {
	let component: TicketsBarChartComponent;
	let fixture: ComponentFixture<TicketsBarChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TicketsBarChartComponent],
			imports: [ChartsModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(TicketsBarChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the tickets bar chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
