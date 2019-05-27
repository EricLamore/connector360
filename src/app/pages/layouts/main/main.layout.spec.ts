import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { MainLayout } from '@application/pages';
import { NbMenuModule, NbSidebarModule, NbSidebarService, NbThemeModule } from '@nebular/theme';

import { TranslateModule } from '@ngx-translate/core';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

describe('Main layout', () => {
	let component: MainLayout;
	let fixture: ComponentFixture<MainLayout>;

	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			value: jest.fn(() => {
				return {
					matches: true
				};
			})
		});
	});

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MainLayout],
			imports: [
				GlobalModule,
				NbMenuModule.forRoot(),
				NbSidebarModule.forRoot(),
				NbThemeModule.forRoot({ name: 'universign' }),
				RouterTestingModule,
				TranslateModule.forRoot()
			],
			providers: [{ provide: NbSidebarService }]
		})
			.compileComponents()
			.catch(() => {
				// error in compilation test
			});
		fixture = TestBed.createComponent(MainLayout);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the main layout', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
