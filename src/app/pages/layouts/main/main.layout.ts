import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/internal/Observable';
import { merge } from 'rxjs/internal/observable/merge';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

// From API call
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
export class MainLayout implements OnInit {
	/*public navBar: { link: string[]; title: string }[] = [
		{
			link: ['/customer-reporting/Mutuelle Bleue'],
			title: 'Reporting client'
		},
		{
			link: ['/global-reporting'],
			title: 'Reporting global'
		}
		{
			link: ['/search-customers'],
			title: 'Rechercher'
		}
	];*/

	public click$: Subject<string> = new Subject<string>();
	public debounceTime: number = 200;
	public focus$: Subject<string> = new Subject<string>();
	@ViewChild('instance', { static: true }) public instance: NgbTypeahead;
	public maxResults: number = 10;
	public model: string;

	public constructor(private readonly _ROUTER: Router) {}

	public ngOnInit(): void {
		this._ROUTER.navigate(['/global-reporting/']);
	}

	public goToHome = (): void => {
		this._ROUTER.navigate(['/global-reporting/']);
	};

	public onSearch = (text$: Observable<string>): Observable<string[]> => {
		const DEBOUNCETEXT$: Observable<string> = text$.pipe(
			debounceTime(this.debounceTime),
			distinctUntilChanged()
		);
		const CLICKSWITHCLOSEDPOPUPS$: Observable<string> = this.click$.pipe(
			filter(() => !this.instance.isPopupOpen())
		);
		const INPUTFOCUS$: Subject<string> = this.focus$;

		return merge(DEBOUNCETEXT$, INPUTFOCUS$, CLICKSWITHCLOSEDPOPUPS$).pipe(
			map((term: string) =>
				(term === ''
					? CLIENTS
					: CLIENTS.filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
				).slice(0, this.maxResults)
			)
		);
	};

	public onSubmitGlobalSearch = (value: string): void => {
		this._ROUTER.navigate(['/customer-reporting/', value]);
	};
}
