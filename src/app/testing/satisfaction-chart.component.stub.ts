import { Component, Input } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';

@Component({
	selector: 'app-satisfaction-chart',
	template: ''
})
export class SatisfactionChartStubComponent {
	@Input() public satisfactionChartData: MultiDataSet;
	@Input() public satisfactionChartMiddleText: string;
}
