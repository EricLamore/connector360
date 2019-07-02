import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-products-chart',
	template: ''
})
export class ProductsChartStubComponent {
	@Input() public datasets: ChartDataSets[];
	@Input() public labels: Label[];
}
