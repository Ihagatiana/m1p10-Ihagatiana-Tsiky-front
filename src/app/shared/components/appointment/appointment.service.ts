import {
  PaginationQuery,
  PaginatedResponse,
} from './../../dtos/pagination.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ReponseAppointment } from './dto/appointment.dto';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private readonly base_url = environment.baseUrl;
  constructor(private readonly httpService: HttpClient) {}

  getAll(params?: PaginationQuery) {
    return this.httpService.get<PaginatedResponse<ReponseAppointment>>(`${this.base_url}/appservices`, {
      params,
    });
  }
}
