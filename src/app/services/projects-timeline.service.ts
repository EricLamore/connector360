// tslint:disable:no-magic-numbers no-commented-code prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UniversignColorStates from '@application/enums/universign-color-states';
import { IProjectsTimelineModel } from '@application/models/i-projects-timeline';

@Injectable({
	providedIn: 'root'
})
export class ProjectsTimelineService {
	public mock: IProjectsTimelineModel = {
		datasets: [
			{
				x: Date.UTC(2018, 11, 10),
				name: 'Assurance rouge IARD',
				label: 'Assurance rouge IARD',
				description: 'Assurance Rouge',
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
				description: 'AFTA',
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
				description: 'Fin. Brousouf',
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
				x: Date.UTC(2019, 0, 1),
				name: 'xxx xx',
				label: 'xxx xx',
				description: 'xxx',
				color: UniversignColorStates.OK,
				dataLabels: {
					color: 'black',
					borderColor: 'black',
					backgroundColor: UniversignColorStates.OK,
					connectorWidth: 2,
					connectorColor: UniversignColorStates.OK
				}
			},
			{
				x: Date.UTC(2019, 0, 2),
				name: 'yyy yy',
				label: 'yyy yy',
				description: 'yyy',
				color: UniversignColorStates.WARNING,
				dataLabels: {
					color: 'black',
					borderColor: 'black',
					backgroundColor: UniversignColorStates.WARNING,
					connectorWidth: 2,
					connectorColor: UniversignColorStates.WARNING
				}
			},
			{
				x: Date.UTC(2019, 0, 20),
				name: 'Mutuelle Risk Business',
				label: 'Mutuelle Risk Business',
				description: 'Mutuelle Bleue',
				color: UniversignColorStates.OK,
				dataLabels: {
					color: 'black',
					borderColor: 'black',
					backgroundColor: UniversignColorStates.OK,
					connectorWidth: 2,
					connectorColor: UniversignColorStates.OK
				}
			}
		]
	};

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient) {}

	public async getProjectsTimeline(): Promise<IProjectsTimelineModel> {
		return new Promise<IProjectsTimelineModel>(
			(
				resolve: (projectsTimeline: IProjectsTimelineModel) => void,
				reject: (error?: HttpErrorResponse) => void
			): void => {
				resolve(this.mock);
			}
		);
	}
}
