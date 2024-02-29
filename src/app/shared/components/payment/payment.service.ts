import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedResponse, PaginationQuery } from '../../dtos/pagination.dto';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = environment.baseUrl;
  constructor(private readonly httpClient: HttpClient) {}

  pay(data: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/payments`, data);
  }

  getByClientId(id: string, params?: PaginationQuery) {
    return this.httpClient.get<PaginatedResponse<any>>(
      `${this.baseUrl}/payments/client/${id}`,
      { params }
    );
  }

  getAll(params?: PaginationQuery) {
    return this.httpClient.get<PaginatedResponse<any>>(
      `${this.baseUrl}/payments`,
      { params }
    );
  }
}
