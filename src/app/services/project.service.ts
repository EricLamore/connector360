// tslint:disable:prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectModel } from '@application/models/i-project';
import { ProjectViewModel } from '@application/view-models/project-view-model';

// TODO: Mocking - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	public mock: IProjectModel[] = [
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-20'),
			name: 'Mutuelle_Risk_Business',
			state: 'OK',
			status: 'Production'
		},
		{
			client: 'AFTA',
			date: new Date('2018-12-16'),
			name: 'AFTA_ITALY',
			state: 'Warning',
			status: 'A lancer'
		},
		{
			client: 'Fin. Brousouf',
			date: new Date('2018-12-17'),
			name: 'Fin.Brousouf_sous_VIE',
			state: 'Danger',
			status: 'Pilote'
		},
		{
			client: 'Assurance Rouge',
			date: new Date('2018-12-10'),
			name: 'Assurance_rouge_IARD',
			state: 'OK',
			status: 'Recette'
		}
	];

	public clientExample: string = 'Mutuelle Bleue';
	public mockClient: IProjectModel[] = [
		{
			client: this.clientExample,
			date: new Date('2019-01-20'),
			name: 'Mutuelle_Risk_Business',
			state: 'OK',
			status: 'Production'
		},
		{
			client: this.clientExample,
			date: new Date('2018-12-15'),
			name: 'Mutuelle_Risk_Business 2',
			state: 'Warning',
			status: 'A lancer'
		},
		{
			client: this.clientExample,
			date: new Date('2018-12-15'),
			name: 'Mutuelle_Risk_Business 3',
			state: 'Danger',
			status: 'Pilote'
		},
		{
			client: this.clientExample,
			date: new Date('2018-12-10'),
			name: 'Mutuelle_Risk_Business 4',
			state: 'OK',
			status: 'Recette'
		},
		{
			client: this.clientExample,
			date: new Date('2019-01-01'),
			name: 'Mutuelle_Risk_Business 5',
			state: 'OK',
			status: 'Production'
		},
		{
			client: this.clientExample,
			date: new Date('2019-01-01'),
			name: 'Mutuelle_Risk_Business 6',
			state: 'Warning',
			status: 'Recette'
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	// TODO : Api Call
	public async getProjects(): Promise<ProjectViewModel[]> {
		return new Promise<ProjectViewModel[]>(
			(resolve: (projects: ProjectViewModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO : Api Call
	public async getProjectsByClient(customerName: string): Promise<ProjectViewModel[]> {
		return new Promise<ProjectViewModel[]>(
			(resolve: (projects: ProjectViewModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.formatData(this.mockClient));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: IProjectModel[]): ProjectViewModel[] {
		const PROJECTS_VIEW_MODEL: ProjectViewModel[] = [];
		for (const PROJECT of res) {
			PROJECTS_VIEW_MODEL.push(new ProjectViewModel({ ...PROJECT }));
		}
		return PROJECTS_VIEW_MODEL;
	}
}
