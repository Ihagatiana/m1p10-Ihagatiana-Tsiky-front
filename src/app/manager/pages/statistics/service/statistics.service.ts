import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  base_url = environment.baseUrl;
  constructor(private readonly httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<any>(`${this.base_url}/statistics`);
  }

  getBenefitsPerMonth(params: BenefitsDto) {
    return this.httpClient.get<any>(`${this.base_url}/statistics/benefits`, {
      params,
    });
  }
}

type BenefitsDto = {
  salary: number;
  rent: number;
  purchases: number;
  expenses: number;
};
