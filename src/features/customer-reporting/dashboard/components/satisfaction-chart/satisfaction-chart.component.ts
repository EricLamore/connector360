// tslint:disable:no-magic-numbers typedef no-any
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { ISatisfactionModel } from '@features/customer-reporting/dashboard/models/i-satisfaction';
import { SatisfactionService } from '@features/customer-reporting/dashboard/services/satisfaction.service';
import { TranslateService } from '@ngx-translate/core';
import { Chart, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';

@Component({
	selector: 'app-satisfaction-chart',
	templateUrl: './satisfaction-chart.component.html'
})
export class SatisfactionChartComponent implements OnInit {
	public chartType: ChartType;
	public colors: Color[];
	@Input() public customerName: string;
	public data: MultiDataSet;
	public dataAvailable: boolean;
	public labels: Label[];
	public legend: boolean;
	public options: any;
	public plugins: PluginServiceGlobalRegistrationAndOptions[];
	public satisfactionChartMiddleText: string;

	public constructor(
		private readonly _REF: ChangeDetectorRef,
		private readonly _SATISFACTION_SERVICE: SatisfactionService,
		private readonly _TRANSLATE_SERVICE: TranslateService
	) {}

	public ngOnInit(): void {
		this.dataAvailable = false;
		this._TRANSLATE_SERVICE.get(['dashboard.supportSatisfaction']).subscribe(() => {
			this._SATISFACTION_SERVICE
				.getSatisfaction(this.customerName)
				.then((satisfaction: ISatisfactionModel) => {
					this.chartType = 'doughnut';
					this.data = satisfaction.data;
					this.satisfactionChartMiddleText = satisfaction.text;
					this.legend = false;
					this.labels = [
						this._TRANSLATE_SERVICE.instant('dashboard.supportSatisfaction.satisfied'),
						this._TRANSLATE_SERVICE.instant('dashboard.supportSatisfaction.unsatisfied')
					];
					this.options = {
						elements: {
							center: {
								text: this.satisfactionChartMiddleText,
								fontColor: 'black',
								fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
								fontSize: 15,
								fontStyle: 'normal'
							}
						}
					};

					const SECOND_COLOR: string = UniversignColorStates.INFO.concat('00');
					let firstColor: string;
					if (this.data[0][0] >= 80) {
						firstColor = UniversignColorStates.OK;
					} else if (this.data[0][0] >= 70) {
						firstColor = UniversignColorStates.WARNING;
					} else {
						firstColor = UniversignColorStates.DANGEROUS;
					}
					this.colors = [{ backgroundColor: [firstColor, SECOND_COLOR] }];
					this.plugins = this.setPlugins();
					this.dataAvailable = true;
					this._REF.detectChanges();
				})
				.catch((err: Error): void => {
					throw err;
				});
		});
	}

	// Javascript code - no type
	private setPlugins(): PluginServiceGlobalRegistrationAndOptions[] {
		return [
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
