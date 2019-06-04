import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayout } from '@application/pages';
import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbSidebarModule,
	NbSidebarService,
	NbThemeModule
} from '@nebular/theme';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

describe('Main layout', () => {
	let component: MainLayout;
	let fixture: ComponentFixture<MainLayout>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MainLayout],
			imports: [
				NbCardModule,
				NbLayoutModule,
				NbMenuModule,
				NbSidebarModule,
				NbThemeModule,
				NbMenuModule.forRoot(),
				NbSidebarModule.forRoot(),
				NbThemeModule.forRoot({ name: 'corporate' }),
				RouterTestingModule
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

	it('should create the app', async(() => {
		chai.expect(component).to.be.ok();
	}));

	it(`should have as title 'VISION360'`, async(() => {
		chai.expect(component.title).to.equal('VISION360');
	}));
});
