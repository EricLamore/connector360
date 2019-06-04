import { Component } from '@angular/core';
import { NbGetters, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface ITreeNode<T> {
	children?: ITreeNode<T>[];
	data: T;
	expanded?: boolean;
}

interface ISCEntry {
	name: string;
	valeur: number;
}

interface IPIEntry {
	debut: string;
	meteo: string;
	name: string;
	statut: string;
}

@Component({
	templateUrl: './global-reporting-dashboard.page.html'
})
export class GlobalReportingDashboardPage {
	public columns1: string[] = ['name', 'valeur'];
	public columns2: string[] = ['name', 'debut', 'statut', 'meteo'];

	public data1: ITreeNode<ISCEntry>[] = [
		{
			data: { name: 'Consommation', valeur: 300 }
		},
		{
			data: { name: 'Pack', valeur: 70 }
		},
		{
			data: { name: 'Spécial', valeur: 10 }
		}
	];

	public data2: ITreeNode<ISCEntry>[] = [
		{
			data: { name: 'Recette', valeur: 15 }
		},
		{
			data: { name: 'Production', valeur: 30 }
		},
		{
			data: { name: 'En service', valeur: 300 }
		}
	];

	public data3: ITreeNode<IPIEntry>[] = [
		{
			data: { name: 'MGC_IARD', debut: 'Janv 2017', statut: 'Recette', meteo: 'OK' }
		},
		{
			data: { name: 'MGC_VIE', debut: 'Mai 2018', statut: 'En service', meteo: 'Warning' }
		}
	];

	public trackById(index: number, item: number): number {
		return index;
	}
}
