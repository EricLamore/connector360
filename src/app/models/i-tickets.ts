interface ITicketsDatasetsModel {
	data: number[];
	label: string;
}

export interface ITicketsModel {
	labels: string[];
	datasets: ITicketsDatasetsModel[];
}
