import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const CLIENTS: string[] = [
	'Mutuelle Bleue',
	'AFTA',
	'Fin. Brousouf',
	'Assurance Rouge',
	'xxx',
	'yyy',
	'Axa assurance',
	'Universign',
	'HP',
	'Generalie',
	'Crédit agricole',
	'Ampli assurance',
	'Smerra',
	'Smerep',
	'Lmde',
	'Total',
	'EDF',
	'Société générale'
];

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './main.layout.html'
})
export class MainLayout {
	public items: { link: string[]; title: string }[] = [
		{
			link: ['/customer-reporting'],
			title: 'Reporting client'
		},
		{
			link: ['/global-reporting'],
			title: 'Reporting global'
		},
		{
			link: ['/search-customers'],
			title: 'Rechercher'
		}
	];
	public title: string = 'VISION360';

	public minLengthSearch: number = 2;
	public maxResults: number = 10;
	public debounceTime: number = 200;

	public search = (text$: Observable<string>): Observable<string[]> =>
		text$.pipe(
			debounceTime(this.debounceTime),
			distinctUntilChanged(),
			map((term: string) => {
				return term.length < this.minLengthSearch
					? []
					: CLIENTS.filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(
							0,
							this.maxResults
					  );
			})
		);
}
