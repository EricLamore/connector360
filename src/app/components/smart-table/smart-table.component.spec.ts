import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ICategory } from '@application/models/i-category';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableComponent } from './smart-table.component';
chai.use(dirtyChai);

describe('Smart table component', () => {
	let component: SmartTableComponent<ICategory>;
	let fixture: ComponentFixture<SmartTableComponent<ICategory>>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SmartTableComponent],
			imports: [Ng2SmartTableModule]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SmartTableComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the smart table component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
