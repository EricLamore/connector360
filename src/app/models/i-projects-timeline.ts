import UniversignColorStates from '@application/enums/universign-color-states';

interface IProjectsTimelineDataLabelsModel {
	color: string;
	borderColor: string;
	backgroundColor: UniversignColorStates;
	connectorWidth: number;
	connectorColor: UniversignColorStates;
}

interface IProjectsTimelineDatasetsModel {
	x: number;
	name: string;
	label: string;
	description: string;
	color: UniversignColorStates;
	dataLabels: IProjectsTimelineDataLabelsModel;
}

export interface IProjectsTimelineModel {
	datasets: IProjectsTimelineDatasetsModel[];
}
