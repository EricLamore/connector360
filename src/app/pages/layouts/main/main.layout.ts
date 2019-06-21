import { ChangeDetectionStrategy, Component } from '@angular/core';

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
}
