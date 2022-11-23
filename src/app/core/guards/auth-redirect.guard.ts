import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private route: Router) {
  }
  canActivate(): UrlTree {
    return this.checkUserStatus();
  }
  private checkUserStatus(): UrlTree {
      return this.route.createUrlTree(['auth']);
  }
}
