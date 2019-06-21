import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-signatures-chart',
	template: ''
})
export class SignaturesChartStubComponent {
	@Input() public signaturesChartData: ChartDataSets[];
	@Input() public signaturesChartLabels: Label[];
}
