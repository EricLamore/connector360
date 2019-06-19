import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlankLayout } from '@application/pages';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);

describe('Blank layout', () => {
	let component: BlankLayout;
	let fixture: ComponentFixture<BlankLayout>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BlankLayout],
			imports: [RouterTestingModule],
			providers: []
		})
			.compileComponents()
			.catch(() => {
				// error in compilation test
			});
		fixture = TestBed.createComponent(BlankLayout);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the blank layout', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
