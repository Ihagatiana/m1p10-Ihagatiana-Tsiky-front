import {
  PaginationQuery,
  PaginatedResponse,
} from './../../dtos/pagination.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import {
  CreateAppointmentDto,
  ReponseAppointment,
} from './dto/appointment.dto';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private readonly base_url = environment.baseUrl;
  constructor(private readonly httpService: HttpClient) {}

  getAll(params?: PaginationQuery) {
    return this.httpService.get<PaginatedResponse<ReponseAppointment>>(
      `${this.base_url}/appservices`,
      {
        params,
      }
    );
  }

  getAllEmploye(employeId: string, params?: PaginationQuery) {
    return this.httpService.get<PaginatedResponse<ReponseAppointment>>(
      `${this.base_url}/employes/appservices/${employeId}`,
      {
        params,
      }
    );
  }

  getAllClient(clientId: string, params?: PaginationQuery) {
    return this.httpService.get<PaginatedResponse<ReponseAppointment>>(
      `${this.base_url}/clients/appservices/${clientId}`,
      { params }
    );
  }

  create(data?: CreateAppointmentDto) {
    return this.httpService.post<ReponseAppointment>(
      `${this.base_url}/appservices`,
      data
    );
  }

  validate(ids: string[]) {
    return this.httpService.put<any>(`${this.base_url}/appservices/validate`, {
      appointmentIds: ids,
    });
  }
}
