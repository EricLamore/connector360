import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionService } from '@features/customer-reporting/dashboard/services/subscription.service';
import { TranslateModule } from '@ngx-translate/core';

import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { SubscriptionsComponent } from './subscriptions.component';
chai.use(dirtyChai);

describe('Subscriptions component', () => {
	let component: SubscriptionsComponent;
	let fixture: ComponentFixture<SubscriptionsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SubscriptionsComponent],
			imports: [TranslateModule.forRoot()],
			providers: [SubscriptionService, { provide: HttpClient }]
		})
			.compileComponents()
			.catch(() => {
				// err compile
			});
		fixture = TestBed.createComponent(SubscriptionsComponent);
		component = fixture.debugElement.componentInstance;
	}));

	test('should create the subscriptions component', async(() => {
		chai.expect(component).to.be.ok();
	}));
});
