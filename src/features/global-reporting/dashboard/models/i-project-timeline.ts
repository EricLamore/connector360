import { UniversignColorStates } from '@application/enums/universign-color-states';

export interface IProjectTimelineDataLabelsModel {
	color: string;
	borderColor: string;
	backgroundColor: UniversignColorStates;
	connectorWidth: number;
	connectorColor: UniversignColorStates;
}

export interface IProjectTimelineModel {
	x: number;
	name: string;
	label: string;
	description: string;
	color: UniversignColorStates;
	dataLabels: IProjectTimelineDataLabelsModel;
}
