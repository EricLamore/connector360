import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NbDateService } from '@nebular/theme';

@Component({
	selector: 'app-search-customers-form',
	templateUrl: './search-customers-form.component.html'
})
export class SearchCustomersFormComponent implements OnInit {
	public amList: string[];
	public activityAreaList: string[];
	public currentDate: Date;
	public indicatorList: string[];
	@Output() public onSearchClick: EventEmitter<string> = new EventEmitter<string>();
	public searchCustormersForm: FormGroup;
	public wayOfConsumingList: string[];

	public constructor(private readonly _DATESERVICE: NbDateService<Date>) {}

	public ngOnInit(): void {
		this.searchCustormersForm = new FormGroup({
			customer: new FormControl(''),
			am: new FormControl(''),
			activityArea: new FormControl(''),
			wayOfConsuming: new FormControl(''),
			indicator: new FormControl(''),
			mepDateInterval: new FormGroup(
				{
					minDate: new FormControl('', [dateValidator]),
					maxDate: new FormControl('', [dateValidator])
				},
				{ validators: dateMEPValidator }
			),
			mrrInterval: new FormGroup(
				{
					minMRR: new FormControl('', [Validators.min(0)]),
					maxMRR: new FormControl('', [Validators.min(0)])
				},
				{ validators: rangeMRRValidator }
			)
		});

		const FIRST_CHOICE: string = 'First Choice';
		const SECOND_CHOICE: string = 'Second Choice';

		this.amList = [FIRST_CHOICE, SECOND_CHOICE];
		this.activityAreaList = [FIRST_CHOICE, SECOND_CHOICE];
		this.wayOfConsumingList = [FIRST_CHOICE, SECOND_CHOICE];
		this.indicatorList = [FIRST_CHOICE, SECOND_CHOICE];
	}

	public get mepDateInterval(): AbstractControl {
		return this.searchCustormersForm.get('mepDateInterval');
	}

	public get minDate(): AbstractControl {
		return this.mepDateInterval.get('minDate');
	}

	public get maxDate(): AbstractControl {
		return this.mepDateInterval.get('maxDate');
	}

	public get mrrInterval(): AbstractControl {
		return this.searchCustormersForm.get('mrrInterval');
	}

	public get minMRR(): AbstractControl {
		return this.mrrInterval.get('minMRR');
	}

	public get maxMRR(): AbstractControl {
		return this.mrrInterval.get('maxMRR');
	}

	public onSubmit(): void {
		this.onSearchClick.emit(this.searchCustormersForm.value);
	}

	public trackById(index: number, item: number): number {
		return index;
	}
}

export const dateMEPValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
	if (!control.get('minDate').value || !control.get('maxDate').value) return null;
	const START_DATE: Date = new Date(control.get('minDate').value);
	const END_DATE: Date = new Date(control.get('maxDate').value);

	return START_DATE > END_DATE ? { dateRangeInvalid: true } : null;
};

export const rangeMRRValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
	const MIN_MRR: number = control.get('minMRR').value;
	const MAX_MRR: number = control.get('maxMRR').value;
	if (!MIN_MRR || !MAX_MRR) return null;

	return MIN_MRR > MAX_MRR ? { mrrRangeInvalid: true } : null;
};

export const dateValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
	return control.value == null ? { dateInvalid: true } : null;
};
