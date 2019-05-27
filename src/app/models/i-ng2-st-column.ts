export interface INg2Column {
	title: string;
	valuePrepareFunction?(date: Date): string;
}
