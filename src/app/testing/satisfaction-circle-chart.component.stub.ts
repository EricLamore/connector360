import { Component, Input } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
	selector: 'app-satisfaction-circle-chart',
	template: ''
})
export class SatisfactionCircleChartStubComponent {
	@Input() public satisfactionCircleChartData: MultiDataSet;
	@Input() public satisfactionCircleChartMiddleText: string;
}
