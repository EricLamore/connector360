import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { DetailsButtonComponent } from './details-button.component';
chai.use(dirtyChai);

describe('Details button component', () => {
	let component: DetailsButtonComponent;
	let fixture: ComponentFixture<DetailsButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DetailsButtonComponent],
			imports: [GlobalModule, RouterTestingModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(DetailsButtonComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the details button component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
