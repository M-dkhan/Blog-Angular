import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string = "https://exapleUrl.com";
  
  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<any>{
    
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      })
      const body = {email, password}
      return this.http.post(this.loginUrl, body, {headers: headers}).pipe(
        tap(response => {
          this.setSession(response)
        }),
        catchError(error => {
          console.error(error)
          return throwError(() => error);
        })
      )
  }

  public setSession(authResult: any){
    const expiresAt = authResult.expiresIn * 1000 + Date.now();
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') ?? '0');
    return Date.now() < expiresAt;
  }
}
