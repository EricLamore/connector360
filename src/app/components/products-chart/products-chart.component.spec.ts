import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from '@application/services/products.service';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { ChartsModule } from 'ng2-charts';
import { ProductsChartComponent } from './products-chart.component';
chai.use(dirtyChai);

describe('Products chart component', () => {
	let component: ProductsChartComponent;
	let fixture: ComponentFixture<ProductsChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProductsChartComponent],
			imports: [ChartsModule],
			providers: [ProductsService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(ProductsChartComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the products chart component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
