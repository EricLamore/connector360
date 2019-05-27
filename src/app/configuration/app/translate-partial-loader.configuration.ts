// tslint:disable:no-any
import { HttpClient } from '@angular/common/http';
import { TRANSLATE_FOLDER } from '@application/helpers';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';
import { merge } from 'rxjs/internal/observable/merge';
import { Observer } from 'rxjs/Observer';
import { skip } from 'rxjs/operators';

export class TranslatePartialLoaderConfiguration implements TranslateLoader {
	public constructor(
		private readonly _HTTP: HttpClient,
		private readonly _PREFIXES: string[] = [`${TRANSLATE_FOLDER}/`],
		private readonly _TRANSLATE_FILE: string = '/translations.json'
	) {}

	public getTranslation(lang: string): Observable<{}> {
		const COMBINED_TRANSLATIONS: {} = {};
		let combinedObservable$: Observable<{}> = null;
		let tmpObservable$: Observable<{}>;

		this._PREFIXES.forEach((prefix: string): void => {
			tmpObservable$ = this.getObservableForHttp$(prefix, COMBINED_TRANSLATIONS, lang);
			if (!combinedObservable$) {
				combinedObservable$ = tmpObservable$;
			} else {
				combinedObservable$ = merge(combinedObservable$, tmpObservable$);
			}
		});

		return combinedObservable$.pipe(skip(this._PREFIXES.length - 1));
	}

	private getObservableForHttp$(prefix: string, combinedObject: any, lang: string): Observable<{}> {
		return new Observable<{}>((observer: Observer<{}>): void => {
			this._HTTP.get(`${prefix}${lang}${this._TRANSLATE_FILE}`).subscribe((response: any): void => {
				Object.keys(response).forEach((key: string): void => {
					combinedObject[key] = response[key];
				});
				observer.next(combinedObject);
				observer.complete();
			});
		});
	}
}
