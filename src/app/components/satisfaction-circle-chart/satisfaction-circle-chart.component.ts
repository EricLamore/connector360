// tslint:disable:no-magic-numbers typedef no-any
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
	selector: 'app-satisfaction-circle-chart',
	templateUrl: './satisfaction-circle-chart.component.html'
})
export class SatisfactionCircleChartComponent implements OnInit {
	@Input() public satisfactionCircleChartData: MultiDataSet;
	public satisfactionCircleChartLabels: Label[];
	public satisfactionCircleChartLegend: boolean;
	@Input() public satisfactionCircleChartMiddleText: string;
	public satisfactionCircleChartOptions: any;
	public satisfactionCircleChartPlugins: PluginServiceGlobalRegistrationAndOptions[];
	public satisfactionCircleChartType: ChartType;

	public ngOnInit(): void {
		this.satisfactionCircleChartType = 'doughnut';
		this.satisfactionCircleChartLegend = false;
		this.satisfactionCircleChartLabels = ['satisfactionCircle', 'Non satisfactionCircle'];
		this.satisfactionCircleChartOptions = {
			elements: {
				center: {
					text: this.satisfactionCircleChartMiddleText,
					fontColor: 'white',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontSize: 14,
					fontStyle: 'normal'
				}
			}
		};
		this.satisfactionCircleChartPlugins = [
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
