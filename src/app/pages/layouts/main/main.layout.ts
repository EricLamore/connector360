import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './main.layout.html'
})
export class MainLayout {
	public items: { link: string[]; title: string }[] = [
		{
			link: ['/'],
			title: 'Index'
		},
		{
			link: ['/client-reporting-dashboard'],
			title: 'Reporting client'
		},
		{
			// @ts-ignore
			children: [
				{
					link: ['/global-reporting'],
					title: 'Dashboard'
				},
				{
					link: ['/global-reporting-projects'],
					title: 'Projects'
				},
				{
					link: ['/global-reporting-support'],
					title: 'Support'
				}
			],
			expanded: false,
			target: ['/global-reporting-dashboard'],
			title: 'Reporting global'
		},
		{
			link: ['/research'],
			title: 'Rechercher'
		}
	];
	public title: string = 'VISION360';
}
