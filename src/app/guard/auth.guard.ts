import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // let router: Router = new Router();
  // var token = localStorage.getItem('token');
  // if (!token) {
  //   router.navigate(['login']);
  //   return false;
  // }

  // const exp = JSON.parse(atob(token.split('.')[1])).exp;
  // const currentTime = Math.floor(Date.now() / 1000);

  // if (exp < currentTime) {
  //   router.navigate(['login']);
  //   return false;
  // }

  return true;
};
