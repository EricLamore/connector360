import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { GlobalModule } from '@application/modules/utilities/global.module';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { DetailsButttonComponent } from './details-buttton.component';
chai.use(dirtyChai);

describe('Details button component', () => {
	let component: DetailsButttonComponent;
	let fixture: ComponentFixture<DetailsButttonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DetailsButttonComponent],
			imports: [GlobalModule, RouterTestingModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(DetailsButttonComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the details button component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
