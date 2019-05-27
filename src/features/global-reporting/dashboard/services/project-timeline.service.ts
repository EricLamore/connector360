// tslint:disable:no-magic-numbers prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversignColorStates } from '@application/enums/universign-color-states';
import { IProjectTimelineModel } from '@features/global-reporting/dashboard/models/i-project-timeline';
import { ProjectTimelineViewModel } from '@features/global-reporting/dashboard/view-models/project-timeline-view-model';
import { TranslateService } from '@ngx-translate/core';

// TODO: Mocking - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class ProjectTimelineService {
	public descriptionCustomer: string;
	public descriptionName: string;
	public descriptionStatus: string;
	public mock: IProjectTimelineModel[];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient, private readonly _TRANSLATE_SERVICE: TranslateService) {
		this._TRANSLATE_SERVICE.get(['project.info']).subscribe(() => {
			this.descriptionCustomer = this._TRANSLATE_SERVICE.instant('category.projects.columns.customer');
			this.descriptionName = this._TRANSLATE_SERVICE.instant('category.projects.columns.name');
			this.descriptionStatus = this._TRANSLATE_SERVICE.instant('category.projects.columns.status');
			this.mock = [
				{
					x: Date.UTC(2018, 11, 10),
					name: 'Assurance rouge IARD',
					label: 'Assurance rouge IARD',
					description: `${this.descriptionCustomer} : Assurance rouge <br> ${this.descriptionName} : Assurance rouge IARD <br> ${this.descriptionStatus} : Recette`,
					color: UniversignColorStates.DANGEROUS,
					dataLabels: {
						color: 'black',
						borderColor: 'black',
						backgroundColor: UniversignColorStates.DANGEROUS,
						connectorWidth: 2,
						connectorColor: UniversignColorStates.DANGEROUS
					}
				},
				{
					x: Date.UTC(2018, 11, 15),
					name: 'AFTA ITALY',
					label: 'AFTA ITALY',
					description: `${this.descriptionCustomer} : AFTA <br> ${this.descriptionName} : AFTA ITALY <br> ${this.descriptionStatus} : A lancer`,
					color: UniversignColorStates.OTHERS,
					dataLabels: {
						color: 'black',
						borderColor: 'black',
						backgroundColor: UniversignColorStates.OTHERS,
						connectorWidth: 2,
						connectorColor: UniversignColorStates.OTHERS
					}
				},
				{
					x: Date.UTC(2018, 11, 16),
					name: 'Fin.Brousouf sous VIE',
					label: 'Fin.Brousouf sous VIE',
					description: `${this.descriptionCustomer} : Fin. Brousouf <br> ${this.descriptionName} : Fin.Brousouf sous VIE <br> ${this.descriptionStatus} : Pilote`,
					color: UniversignColorStates.DANGEROUS,
					dataLabels: {
						color: 'black',
						borderColor: 'black',
						backgroundColor: UniversignColorStates.DANGEROUS,
						connectorWidth: 2,
						connectorColor: UniversignColorStates.DANGEROUS
					}
				},
				{
					x: Date.UTC(2019, 0, 20),
					name: 'Mutuelle Risk Business',
					label: 'Mutuelle Risk Business',
					description: `${this.descriptionCustomer} : Mutuelle Bleue <br> ${this.descriptionName} : Mutuelle Risk Business <br> ${this.descriptionStatus} : Production`,
					color: UniversignColorStates.OK,
					dataLabels: {
						color: 'black',
						borderColor: 'black',
						backgroundColor: UniversignColorStates.OK,
						connectorWidth: 2,
						connectorColor: UniversignColorStates.OK
					}
				}
			];
		});
	}

	// TODO : Api Call
	public async getProjectsTimeline(): Promise<ProjectTimelineViewModel[]> {
		return new Promise<ProjectTimelineViewModel[]>(
			(
				resolve: (projects: ProjectTimelineViewModel[]) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: IProjectTimelineModel[]): ProjectTimelineViewModel[] {
		const PROJECTS_TIMELINE_VIEW_MODEL: ProjectTimelineViewModel[] = [];
		for (const PROJECT of res) {
			PROJECTS_TIMELINE_VIEW_MODEL.push(new ProjectTimelineViewModel({ ...PROJECT }));
		}
		return PROJECTS_TIMELINE_VIEW_MODEL;
	}
}
