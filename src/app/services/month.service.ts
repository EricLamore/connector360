import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
	providedIn: 'root'
})
export class MonthService {
	public months: string[];

	public constructor(private readonly _TRANSLATE_SERVICE: TranslateService) {
		this._TRANSLATE_SERVICE.get(['months']).subscribe(() => {
			this.months = [
				this._TRANSLATE_SERVICE.instant('months.january'),
				this._TRANSLATE_SERVICE.instant('months.february'),
				this._TRANSLATE_SERVICE.instant('months.march'),
				this._TRANSLATE_SERVICE.instant('months.april'),
				this._TRANSLATE_SERVICE.instant('months.may'),
				this._TRANSLATE_SERVICE.instant('months.june'),
				this._TRANSLATE_SERVICE.instant('months.july'),
				this._TRANSLATE_SERVICE.instant('months.august'),
				this._TRANSLATE_SERVICE.instant('months.september'),
				this._TRANSLATE_SERVICE.instant('months.october'),
				this._TRANSLATE_SERVICE.instant('months.november'),
				this._TRANSLATE_SERVICE.instant('months.december')
			];
		});
	}

	public getLastMonthsNumber(monthNumber: number): number[] {
		const NUMBER_OF_MONTHS: number = this.months.length;
		const MONTH_START: number = new Date().getMonth();

		const MONTHS: number[] = [];
		for (let i: number = 0; i < monthNumber; i++) {
			MONTHS.push((MONTH_START + NUMBER_OF_MONTHS - (monthNumber - i)) % (NUMBER_OF_MONTHS - 1));
		}
		return MONTHS;
	}

	public getMonths(): string[] {
		return this.months;
	}

	public getSectionOfMonths(monthNumber: number): string[] {
		const NUMBER_OF_MONTHS: number = this.months.length;
		const MONTH_START: number = (new Date().getMonth() + NUMBER_OF_MONTHS - monthNumber) % (NUMBER_OF_MONTHS - 1);
		return MONTH_START + monthNumber > this.months.length
			? [
					...this.months.slice(MONTH_START, this.months.length),
					...this.months.slice(0, monthNumber - (this.months.length - MONTH_START))
			  ]
			: this.months.slice(MONTH_START, MONTH_START + monthNumber);
	}
}
