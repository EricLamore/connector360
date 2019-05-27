// tslint:disable:no-magic-numbers prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProjectOverviewModel } from '@features/global-reporting/dashboard/models/i-project-overview';
import { ProjectOverviewViewModel } from '@features/global-reporting/dashboard/view-models/project-overview-view-model';
import { TranslateService } from '@ngx-translate/core';

// TODO: Mocking - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class ProjectOverviewService {
	public mock: IProjectOverviewModel;

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient, private readonly _TRANSLATE_SERVICE: TranslateService) {
		this._TRANSLATE_SERVICE.get(['project.state']).subscribe(() => {
			this.mock = {
				labels: [
					this._TRANSLATE_SERVICE.instant('project.state.staging'),
					this._TRANSLATE_SERVICE.instant('project.state.prod'),
					this._TRANSLATE_SERVICE.instant('project.state.running'),
					this._TRANSLATE_SERVICE.instant('project.state.stopped')
				],
				datasets: [{ data: [15, 30, 300, 20] }]
			};
		});
	}

	// TODO : Api Call
	public async getProjectsOverview(): Promise<ProjectOverviewViewModel> {
		return new Promise<ProjectOverviewViewModel>(
			(
				resolve: (projectsOverview: ProjectOverviewViewModel) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: IProjectOverviewModel): ProjectOverviewViewModel {
		return new ProjectOverviewViewModel(res);
	}
}
