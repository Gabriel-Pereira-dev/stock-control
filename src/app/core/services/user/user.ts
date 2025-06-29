import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthRequest } from '@models/interfaces/auth/AuthRequest';
import { AuthResponse } from '@models/interfaces/auth/AuthResponse';
import { SignupUserRequest } from '@models/interfaces/SignupUserRequest';
import { SignupUserResponse } from '@models/interfaces/SignupUserResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  //Injects
  private readonly http = inject(HttpClient);

  //Properties
  private readonly API_URL = environment.API_URL;

  signupUser(requestData: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `
    ${this.API_URL}/user`,
      requestData,
    );
  }

  authUser(requestData: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `
      ${this.API_URL}/auth`,
      requestData,
    );
  }
}
