import { TestBed, async } from '@angular/core/testing';
import { MainLayout } from '@application/pages';

describe('Main layout', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MainLayout
			],
		}).compileComponents();
	}));
	
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(MainLayout);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'vision360'`, async(() => {
		const fixture = TestBed.createComponent(MainLayout);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('vision360');
	}));

	it('should render title in a h1 tag', async(() => {
		const fixture = TestBed.createComponent(MainLayout);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to vision360!');
	}));
});
