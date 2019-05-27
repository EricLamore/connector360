export interface IProjectOverviewDatasetsModel {
	data: number[];
}

export interface IProjectOverviewModel {
	labels: string[];
	datasets: IProjectOverviewDatasetsModel[];
}
