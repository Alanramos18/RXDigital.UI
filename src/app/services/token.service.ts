import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  expiration = 0;
  
  public getDataFromToken<T>(token: string): T {
    let data = <T>{};
    if (token && token.indexOf("\"\"") === -1) {
      const encoded = token.split('.')[1];
      data = JSON.parse(this.urlBase64Decode(encoded ? encoded : token));
    }

    return data;
  } 

  private urlBase64Decode(str: string): any {
    let output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw new Error('Illegal base64url string!');
    }

    return window.atob(output);
  }

  public store(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public retrieve(key: string): any {
    if (typeof sessionStorage !== 'undefined') {
      const item = sessionStorage.getItem(key);
      let json = "";
  
      if(item && item !== 'undefined') {
        try {
          json = JSON.parse(item);
        } catch (error) {
          json = "";
        }
      }
  
      return json;
    }
  }

  public resetToken(): void {
    this.expiration = 0;
  }

  public setExpiration(token: string): void {
    const payload: any = this.getDataFromToken(token);
    this.expiration = payload.exp;
  }

  public clean(): void {
    sessionStorage.clear();
  }

  isTokenExpired(): boolean {
    const now = Math.round(new Date().getTime() / 1000);
    return this.expiration > 0 && this.expiration - now < 0;
  }
}
