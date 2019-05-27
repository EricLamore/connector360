import {
	IProjectOverviewDatasetsModel,
	IProjectOverviewModel
} from '@features/global-reporting/dashboard/models/i-project-overview';

export class ProjectOverviewViewModel implements IProjectOverviewModel {
	public labels: string[];
	public datasets: IProjectOverviewDatasetsModel[];

	public constructor(data?: IProjectOverviewModel) {
		if (!data) {
			return;
		}

		this.copy(data);
	}

	public copy(data: IProjectOverviewModel): void {
		if (typeof data.labels !== 'undefined') {
			this.labels = Array.from(data.labels);
		}
		if (typeof data.datasets !== 'undefined') {
			this.datasets = Array.from(data.datasets);
		}
	}
}
