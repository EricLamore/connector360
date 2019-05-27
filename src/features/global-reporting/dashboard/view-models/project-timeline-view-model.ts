import { UniversignColorStates } from '@application/enums/universign-color-states';
import {
	IProjectTimelineDataLabelsModel,
	IProjectTimelineModel
} from '@features/global-reporting/dashboard/models/i-project-timeline';

export class ProjectTimelineViewModel implements IProjectTimelineModel {
	public x: number;
	public name: string;
	public label: string;
	public description: string;
	public color: UniversignColorStates;
	public dataLabels: IProjectTimelineDataLabelsModel;

	public constructor(data?: IProjectTimelineModel) {
		if (!data) {
			return;
		}

		this.copy(data);
	}

	public copy(data: IProjectTimelineModel): void {
		if (typeof data.x !== 'undefined') {
			this.x = data.x;
		}
		if (typeof data.name !== 'undefined') {
			this.name = data.name;
		}
		if (typeof data.label !== 'undefined') {
			this.label = data.label;
		}
		if (typeof data.description !== 'undefined') {
			this.description = data.description;
		}
		if (typeof data.color !== 'undefined') {
			this.color = data.color;
		}
		if (typeof data.dataLabels !== 'undefined') {
			this.dataLabels = data.dataLabels;
		}
	}
}
