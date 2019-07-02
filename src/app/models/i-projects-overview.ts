interface IProjectsOverviewDatasetsModel {
	data: number[];
}

export interface IProjectsOverviewModel {
	labels: string[];
	datasets: IProjectsOverviewDatasetsModel[];
}
