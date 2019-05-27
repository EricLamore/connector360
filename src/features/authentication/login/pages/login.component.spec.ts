import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import { NbAuthModule } from '@nebular/auth';
import { TranslateModule } from '@ngx-translate/core';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { LoginComponent } from './login.component';
chai.use(dirtyChai);

describe('Login component', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LoginComponent],
			imports: [GlobalModule, NbAuthModule.forRoot({}), RouterTestingModule, TranslateModule.forRoot()],
			providers: []
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the login component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
