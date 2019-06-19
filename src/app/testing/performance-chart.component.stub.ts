import { Component, Input } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
	selector: 'app-performance-chart',
	template: ''
})
export class PerformanceChartStubComponent {
	@Input() public performanceChartData: MultiDataSet;
	@Input() public performanceChartMiddleText: string;
}
