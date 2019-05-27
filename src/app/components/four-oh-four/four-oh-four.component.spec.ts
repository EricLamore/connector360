import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { FourOhFourComponent } from './four-oh-four.component';
chai.use(dirtyChai);

describe('Four oh four component', () => {
	let component: FourOhFourComponent;
	let fixture: ComponentFixture<FourOhFourComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FourOhFourComponent],
			imports: [RouterTestingModule],
			providers: []
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(FourOhFourComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the four oh four component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
