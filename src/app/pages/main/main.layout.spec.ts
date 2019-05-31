import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainLayout } from '@application/pages';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

describe('Main layout', () => {
	let component: MainLayout;
	let fixture: ComponentFixture<MainLayout>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MainLayout]
		})
			.compileComponents()
			.catch(() => {
				// error in compilation test
			});
		fixture = TestBed.createComponent(MainLayout);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the app', async(() => {
		chai.expect(component).to.be.ok();
	}));

	test(`should have as title 'vision360'`, async(() => {
		chai.expect(component.title).to.equal('vision360');
	}));

	test('should render title in a h1 tag', async(() => {
		fixture.detectChanges();
		chai.expect(fixture.debugElement.nativeElement.querySelector('h1').textContent).to.contain(
			'Welcome to vision360!'
		);
	}));
});
