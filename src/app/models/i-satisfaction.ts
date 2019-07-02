import UniversignColorStates from '@application/enums/universign-color-states';

interface ISatisfactionPlotBandsModel {
	from: number;
	to: number;
	color: UniversignColorStates;
}

export interface ISatisfactionModel {
	plotBands: ISatisfactionPlotBandsModel[];
}
