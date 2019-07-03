import { UniversignColorStates } from '@application/enums/universign-color-states';
import { ISatisfactionAreaModel } from '@application/models/i-satisfaction-area';

export const MONTHS: string[] = [
	'Janvier',
	'Février',
	'Mars',
	'Avril',
	'Mai',
	'Juin',
	'Juillet',
	'Août',
	'Septembre',
	'Octobre',
	'Novembre',
	'Décembre'
];

export const SATISFACTION_AREA: ISatisfactionAreaModel[] = [
	{
		from: 0,
		to: 50,
		color: UniversignColorStates.DANGEROUS
	},
	{
		from: 50,
		to: 75,
		color: UniversignColorStates.WARNING
	},
	{
		from: 75,
		to: 90,
		color: UniversignColorStates.OTHERS
	},
	{
		from: 90,
		to: 100,
		color: UniversignColorStates.OK
	}
];
