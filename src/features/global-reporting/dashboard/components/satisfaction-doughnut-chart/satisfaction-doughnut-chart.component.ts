import { Component } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import { Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
	selector: 'app-satisfaction-doughnut-chart',
	templateUrl: './satisfaction-doughnut-chart.component.html'
})

// tslint:disable:no-magic-numbers
export class SatisfactionDoughnutChartComponent {
	public doughnutChartData: MultiDataSet = [[90, 10]];
	public doughnutChartLabels: Label[] = ['Satisfaction', 'Non satisfaction'];
	public doughnutChartMiddleText: string = '90%';

	// tslint:disable
	public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [
		{
			afterDraw(chart) {
				// @ts-ignore
				var center = chart.config.options.elements.center;
				if (center) {
					var helpers = Chart.helpers;
					var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
					var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

					// @ts-ignore
					var ctx = chart.chart.ctx;
					ctx.save();
					var fontSize = helpers.getValueOrDefault(center.fontSize, Chart.defaults.global.defaultFontSize);
					var fontStyle = helpers.getValueOrDefault(center.fontStyle, Chart.defaults.global.defaultFontStyle);
					var fontFamily = helpers.getValueOrDefault(
						center.fontFamily,
						Chart.defaults.global.defaultFontFamily
					);
					var font = helpers.fontString(fontSize, fontStyle, fontFamily);
					ctx.font = font;
					ctx.fillStyle = helpers.getValueOrDefault(center.fontColor, Chart.defaults.global.defaultFontColor);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'middle';
					ctx.fillText(center.text, centerX, centerY);
					ctx.restore();
				}
			}
		}
	];
	public doughnutChartType: ChartType = 'doughnut';
	public dougnnutChartLegend: boolean = false;
	public opts = {
		elements: {
			center: {
				text: this.doughnutChartMiddleText,
				fontColor: 'white',
				fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				fontSize: 17,
				fontStyle: 'normal'
			}
		}
	};
}
