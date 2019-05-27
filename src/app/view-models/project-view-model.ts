import { INg2Column } from '@application/models/i-ng2-st-column';
import { IProjectModel } from '@application/models/i-project';

export class ProjectViewModel implements IProjectModel {
	public client: INg2Column | string;
	public date: INg2Column | Date;
	public name: INg2Column | string;
	public state: INg2Column | string;
	public status: INg2Column | string;

	public constructor(data?: IProjectModel) {
		if (!data) {
			return;
		}
		this.copy(data);
	}

	public copy(data: IProjectModel): void {
		if (typeof data.client !== 'undefined') {
			this.client = data.client;
		}
		if (typeof data.date !== 'undefined') {
			this.date = data.date;
		}
		if (typeof data.name !== 'undefined') {
			this.name = data.name;
		}
		if (typeof data.state !== 'undefined') {
			this.state = data.state;
		}
		if (typeof data.status !== 'undefined') {
			this.status = data.status;
		}
	}
}
