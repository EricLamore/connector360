import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '@application/services/product.service';
import { TranslateModule } from '@ngx-translate/core';

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
			imports: [ChartsModule, TranslateModule.forRoot()],
			providers: [ProductService, { provide: HttpClient }]
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
