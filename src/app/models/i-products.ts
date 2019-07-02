interface IProductsDatasetsModel {
	data: number[];
	label: string;
}

export interface IProductsModel {
	labels: string[];
	datasets: IProductsDatasetsModel[];
}
