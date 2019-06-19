// tslint:disable:no-magic-numbers typedef no-any
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
	selector: 'app-performance-chart',
	templateUrl: './performance-chart.component.html'
})
export class PerformanceChartComponent implements OnInit {
	@Input() public performanceChartData: MultiDataSet;
	public performanceChartLabels: Label[];
	public performanceChartLegend: boolean;
	@Input() public performanceChartMiddleText: string;
	public performanceChartOptions: any;
	public performanceChartPlugins: PluginServiceGlobalRegistrationAndOptions[];
	public performanceChartType: ChartType;
	public performanceColors: any[];

	public ngOnInit(): void {
		this.performanceChartType = 'doughnut';
		this.performanceChartLegend = false;
		this.performanceChartLabels = ['', ''];
		this.performanceChartOptions = {
			rotation: Math.PI * 1,
			circumference: Math.PI * 1,
			elements: {
				center: {
					text: this.performanceChartMiddleText,
					fontColor: 'white',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontSize: 14,
					fontStyle: 'normal'
				}
			}
		};
		this.performanceChartPlugins = [
			{
				afterDraw(chart: Chart): void {
					// @ts-ignore
					const CENTER = chart.config.options.elements.center;
					if (!CENTER) {
						return;
					}
					const HELPERS = Chart.helpers;
					const CENTER_X = (chart.chartArea.left + chart.chartArea.right) / 2;
					const CENTER_Y = (chart.chartArea.top + chart.chartArea.bottom) / 1.2;

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
		this.performanceColors = [
			{
				borderColor: 'black',
				backgroundColor: ['purple', 'white']
			}
		];
	}
}
