import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private baseUrl = environment.baseUrl;
  constructor(private readonly httpClient: HttpClient) {}

  signUp(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/clients`, data);
  }
}
