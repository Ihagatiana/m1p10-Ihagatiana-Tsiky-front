import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = environment.baseUrl;
  constructor(private readonly httpClient: HttpClient) {}

  pay(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/payments`, data);
  }
}
