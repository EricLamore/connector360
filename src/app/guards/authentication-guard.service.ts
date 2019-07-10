import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
	public constructor(private readonly _AUTHSERVICE: NbAuthService, private readonly _ROUTER: Router) {}

	public canActivate(): Observable<boolean> {
		return this._AUTHSERVICE.isAuthenticated().pipe(
			tap((authenticated: boolean) => {
				if (!authenticated) {
					this._ROUTER.navigate(['auth/login']);
				}
			})
		);
	}

	public async canActivateChild(): Promise<boolean> {
		const IS_AUTHENTIFICATED: boolean = await this._AUTHSERVICE
			.isAuthenticated()
			.toPromise()
			.then();
		if (IS_AUTHENTIFICATED) {
			return Promise.resolve(false);
		}
		return Promise.resolve(true);
	}
}
