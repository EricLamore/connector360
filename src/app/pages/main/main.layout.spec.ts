import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MainLayout } from '@application/pages';

describe('Main layout', () => {
	let component: MainLayout;
	let fixture: ComponentFixture<MainLayout>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MainLayout
			],
		}).compileComponents().catch(() => {
			// error in compilation test
		});
		fixture = TestBed.createComponent(MainLayout);
		component = fixture.debugElement.componentInstance;
	}));
	
	it('should create the app', async(() => {
		expect(component).toBeTruthy();
	}));

	it(`should have as title 'vision360'`, async(() => {
		expect(component.title).toEqual('vision360');
	}));

	it('should render title in a h1 tag', async(() => {
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to vision360!');
	}));
});
