import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbThemeModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { AuthenticationPage } from './authentication.page';
chai.use(dirtyChai);

describe('Authentication page', () => {
	let component: AuthenticationPage;
	let fixture: ComponentFixture<AuthenticationPage>;

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
			declarations: [AuthenticationPage],
			imports: [
				GlobalModule,
				NbAuthModule.forRoot({
					strategies: [
						NbDummyAuthStrategy.setup({
							name: 'email'
						})
					],
					forms: {
						login: {
							rememberMe: false
						}
					}
				}),
				NbThemeModule.forRoot({ name: 'universign' }),
				RouterTestingModule,
				TranslateModule.forRoot()
			],
			providers: []
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(AuthenticationPage);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the authentication page', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
