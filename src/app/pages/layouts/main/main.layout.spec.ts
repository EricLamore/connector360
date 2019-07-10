import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayout } from '@application/pages';

import { FormsModule } from '@angular/forms';
import {
	NbCardModule,
	NbLayoutModule,
	NbMenuModule,
	NbSidebarModule,
	NbSidebarService,
	NbThemeModule
} from '@nebular/theme';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
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
				NgbTypeaheadModule,
				FormsModule,
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

	test('should create the main layout', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
