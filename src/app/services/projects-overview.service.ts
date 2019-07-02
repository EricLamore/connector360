// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectsOverviewModel } from '@application/models/i-projects-overview';

@Injectable({
	providedIn: 'root'
})
export class ProjectsOverviewService {
	public mock: IProjectsOverviewModel = {
		labels: ['Recette', 'Production', 'En service', 'Arrêté'],
		datasets: [{ data: [15, 30, 300, 20] }]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getProjectsOverview(): Promise<IProjectsOverviewModel> {
		return new Promise<IProjectsOverviewModel>(
			(
				resolve: (projectsOverview: IProjectsOverviewModel) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<IProjectsOverviewModel>((resolve: (mrr: IProjectsOverviewModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: IProjectsOverviewModel) => {
					//resolve(new ProjectsOverviewViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}
}
