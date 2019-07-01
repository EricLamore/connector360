interface IMrrDatasetsModel {
	data: number[];
	pointRadius?: number[];
	label: string;
}

export interface IMrrModel {
	labels: string[];
	datasets: IMrrDatasetsModel[];
}
