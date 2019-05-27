import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class OnlyUnloggedGuard implements CanActivate {
	public constructor(private readonly _AUTHSERVICE: NbAuthService, private readonly _ROUTER: Router) {}

	public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		if (state.url === '/auth') {
			this._ROUTER.navigate(['/not-found']);
			return Promise.resolve(false);
		}

		const IS_AUTHENTICATED: boolean = await this._AUTHSERVICE
			.isAuthenticated()
			.toPromise()
			.then();
		if (IS_AUTHENTICATED && state.url !== '/auth/logout') {
			this._ROUTER.navigate(['/']);
			return Promise.resolve(false);
		}
		return Promise.resolve(true);
	}
}
