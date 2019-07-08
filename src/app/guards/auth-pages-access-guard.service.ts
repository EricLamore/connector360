import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthPagesAccessGuard implements CanActivate {
	public constructor(private readonly _AUTHSERVICE: NbAuthService, private readonly _ROUTER: Router) {}

	public async canActivate(): Promise<boolean> {
		const IS_AUTHENTIFICATED: boolean = await this._AUTHSERVICE
			.isAuthenticated()
			.toPromise()
			.then();
		if (IS_AUTHENTIFICATED) {
			this._ROUTER.navigate(['/']);
			return Promise.resolve(false);
		}
		return Promise.resolve(true);
	}
}
