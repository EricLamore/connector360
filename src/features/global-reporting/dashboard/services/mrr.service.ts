// tslint:disable:no-magic-numbers prefer-promise-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMrrModel } from '@features/global-reporting/dashboard/models/i-mrr';
import { MrrViewModel } from '@features/global-reporting/dashboard/view-models/mrr-view-model';
import { TranslateService } from '@ngx-translate/core';

// TODO: Mocking - We have no explanations from Universign
@Injectable({
	providedIn: 'root'
})
export class MrrService {
	public mock: IMrrModel[];

	private readonly _url: string = '@/';

	public constructor(private readonly _HTTP: HttpClient, private readonly _TRANSLATE_SERVICE: TranslateService) {
		this._TRANSLATE_SERVICE.get(['mrr']).subscribe(() => {
			this.mock = [
				{
					data: [
						300000,
						300000,
						300000,
						300000,
						300000,
						300000,
						300000,
						300000,
						300000,
						300000,
						300000,
						300000
					],
					pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
					label: this._TRANSLATE_SERVICE.instant('mrr.provisional')
				},
				{
					data: [10000, 20000, 40000, 50000, 70000, 100000, 110000, 160000, 200000, 220000, 250000, 270000],
					label: this._TRANSLATE_SERVICE.instant('mrr.realized')
				}
			];
		});
	}

	// TODO : Api Call
	public async getMRR(): Promise<MrrViewModel[]> {
		return new Promise<MrrViewModel[]>(
			(resolve: (mrr: MrrViewModel[]) => void, reject: (error?: HttpErrorResponse) => void): void => {
				resolve(this.formatData(this.mock));
			}
		);
	}

	// TODO: We have no explanations from Universign, we can't do the mock
	public formatData(res: IMrrModel[]): MrrViewModel[] {
		const MRR_VIEW_MODEL: MrrViewModel[] = [];
		for (const MRR of res) {
			MRR_VIEW_MODEL.push(new MrrViewModel({ ...MRR }));
		}
		return MRR_VIEW_MODEL;
	}
}
