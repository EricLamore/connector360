import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NbAuthModule } from '@nebular/auth';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { LogoutComponent } from './logout.component';
chai.use(dirtyChai);

describe('Logout component', () => {
	let component: LogoutComponent;
	let fixture: ComponentFixture<LogoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LogoutComponent],
			imports: [NbAuthModule.forRoot({}), RouterTestingModule],
			providers: []
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(LogoutComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the logout component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
