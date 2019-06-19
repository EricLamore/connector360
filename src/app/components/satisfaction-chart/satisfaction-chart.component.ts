// tslint:disable:no-magic-numbers typedef no-any
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
	selector: 'app-satisfaction-chart',
	templateUrl: './satisfaction-chart.component.html'
})
export class SatisfactionChartComponent implements OnInit {
	@Input() public satisfactionChartData: MultiDataSet;
	public satisfactionChartLabels: Label[];
	public satisfactionChartLegend: boolean;
	@Input() public satisfactionChartMiddleText: string;
	public satisfactionChartOptions: any;
	public satisfactionChartPlugins: PluginServiceGlobalRegistrationAndOptions[];
	public satisfactionChartType: ChartType;

	public ngOnInit(): void {
		this.satisfactionChartType = 'doughnut';
		this.satisfactionChartLegend = false;
		this.satisfactionChartLabels = ['Satisfaction', 'Non satisfaction'];
		this.satisfactionChartOptions = {
			elements: {
				center: {
					text: this.satisfactionChartMiddleText,
					fontColor: 'white',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontSize: 14,
					fontStyle: 'normal'
				}
			}
		};
		this.satisfactionChartPlugins = [
			{
				afterDraw(chart: Chart): void {
					// @ts-ignore
					const CENTER = chart.config.options.elements.center;
					if (!CENTER) {
						return;
					}
					const HELPERS = Chart.helpers;
					const CENTER_X = (chart.chartArea.left + chart.chartArea.right) / 2;
					const CENTER_Y = (chart.chartArea.top + chart.chartArea.bottom) / 2;

					// @ts-ignore
					const CTX = chart.chart.ctx;
					CTX.save();
					const FONTSIZE = HELPERS.getValueOrDefault(CENTER.fontSize, Chart.defaults.global.defaultFontSize);
					const FONTSTYLE = HELPERS.getValueOrDefault(
						CENTER.fontStyle,
						Chart.defaults.global.defaultFontStyle
					);
					const FONTFAMILY = HELPERS.getValueOrDefault(
						CENTER.fontFamily,
						Chart.defaults.global.defaultFontFamily
					);
					const FONT = HELPERS.fontString(FONTSIZE, FONTSTYLE, FONTFAMILY);
					CTX.font = FONT;
					CTX.fillStyle = HELPERS.getValueOrDefault(CENTER.fontColor, Chart.defaults.global.defaultFontColor);
					CTX.textAlign = 'center';
					CTX.textBaseline = 'middle';
					CTX.fillText(CENTER.text, CENTER_X, CENTER_Y);
					CTX.restore();
				}
			}
		];
	}
}
