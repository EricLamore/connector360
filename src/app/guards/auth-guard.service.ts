import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly _AUTHSERVICE: NbAuthService, private readonly _ROUTER: Router) {}

	public canActivate(): Observable<boolean> {
		return this._AUTHSERVICE.isAuthenticated().pipe(
			tap((authenticated: boolean) => {
				if (!authenticated) {
					this._ROUTER.navigate(['auth/login']);
				}
			})
		); // canActive can return Observable<boolean>, which is exactly what isAuthenticated returns
	}
}
