import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private base_url = environment.baseUrl;
  constructor(private readonly httpService: HttpClient) {}
  getAll() {
    return this.httpService.get<Service[]>(`${this.base_url}/services`);
  }

  findOne(id: Service['id']) {
    return this.httpService.get<Service>(`${this.base_url}/services/${id}`);
  }

  create(service: Service) {
    return this.httpService.post<Service>(`${this.base_url}/services`, service);
  }

  update(id: Service['id'], service: UpdateServiceDto) {
    return this.httpService.put<Service>(
      `${this.base_url}/services/${id}`,
      service
    );
  }
  delete(id: Service['id']) {
    return this.httpService.delete<Service>(`${this.base_url}/${id}`);
  }
}

export type Service = any & {
  id: number;
  name: string;
};

export type UpdateServiceDto = Partial<Service>;
