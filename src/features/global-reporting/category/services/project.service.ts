// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand no-duplicate-string
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectModel } from '@features/global-reporting/category/models/i-project';

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
			date: new Date('2018-12-15'),
			name: 'AFTA_ITALY',
			state: 'Warning',
			status: 'A lancer'
		},
		{
			client: 'Fin. Brousouf',
			date: new Date('2018-12-15'),
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
		},
		{
			client: 'xxx',
			date: new Date('2019-01-01'),
			name: 'xxx_xx',
			state: 'OK',
			status: 'Production'
		},
		{
			client: 'yyy',
			date: new Date('2019-01-01'),
			name: 'yyy_yy',
			state: 'Warning',
			status: 'Recette'
		}
	];

	public mockClient: IProjectModel[] = [
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-20'),
			name: 'Mutuelle_Risk_Business',
			state: 'OK',
			status: 'Production'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2018-12-15'),
			name: 'Mutuelle_Risk_Business 2',
			state: 'Warning',
			status: 'A lancer'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2018-12-15'),
			name: 'Mutuelle_Risk_Business 3',
			state: 'Danger',
			status: 'Pilote'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2018-12-10'),
			name: 'Mutuelle_Risk_Business 4',
			state: 'OK',
			status: 'Recette'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-01'),
			name: 'Mutuelle_Risk_Business 5',
			state: 'OK',
			status: 'Production'
		},
		{
			client: 'Mutuelle Bleue',
			date: new Date('2019-01-01'),
			name: 'Mutuelle_Risk_Business 6',
			state: 'Warning',
			status: 'Recette'
		}
	];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getProjects(): Promise<IProjectModel[]> {
		return new Promise<IProjectModel[]>(
			(resolve: (projects: IProjectModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mock);
			}
		);
		/*return new Promise<IProjectModel>((resolve: (project: IProjectModel) => void, reject: (error?: HttpErrorResponse) => void): void => {
			this._HTTP.get(`${this._url}`)
				.subscribe((res: IProjectModel) => {
					//resolve(new ProjectViewModel(res));
				}, (error: HttpErrorResponse) => {
					reject(error);
				});
		});*/
	}

	public async getProjectsByClient(client: string): Promise<IProjectModel[]> {
		return new Promise<IProjectModel[]>(
			(resolve: (projects: IProjectModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.mockClient);
			}
		);
	}
}
