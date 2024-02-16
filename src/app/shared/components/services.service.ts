import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreateServiceDto, UpdateServiceDto } from './services/dto/service.dto';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private base_url = environment.baseUrl;
  constructor(private readonly httpService: HttpClient) {}
  getAll() {
    return this.httpService.get<Service[]>(`${this.base_url}/services`);
  }

  findOne(id: Service['_id']) {
    return this.httpService.get<Service>(`${this.base_url}/services/${id}`);
  }

  create(service: CreateServiceDto) {
    return this.httpService.post<Service>(`${this.base_url}/services`, service);
  }

  update(id: Service['_id'], service: UpdateServiceDto) {
    return this.httpService.put<Service>(
      `${this.base_url}/services/${id}`,
      service
    );
  }
  delete(id: Service['_id']) {
    return this.httpService.delete<Service>(`${this.base_url}/services/${id}`);
  }
}

export type Service = {
  _id: string;
  name: string;
  price: number;
  // duration: Time;
  duration: number;
  description: string;
};
