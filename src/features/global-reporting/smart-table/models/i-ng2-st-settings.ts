export interface INg2Settings<T> {
	actions: boolean;
	columns: T;
	hideSubHeader: boolean;
	noDataMessage: string;
	pager: {
		display: boolean;
		perPage: number;
	};
}
