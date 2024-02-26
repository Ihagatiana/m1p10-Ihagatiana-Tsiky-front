import { PaginatedResponse } from './../../dtos/pagination.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { PaginationQuery } from '../../dtos/pagination.dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  base_url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getAll(params?: PaginationQuery) {
    return this.httpClient.get<PaginatedResponse<any>>(
      `${this.base_url}/employes`,
      { params }
    );
  }

  create(employe: any) {
    const formData = new FormData();

    formData.append('name', employe.name);
    formData.append('firstname', employe.firstname);
    formData.append('photos', employe.photos);
    formData.append('starttime', JSON.stringify(employe.starttime));
    formData.append('endtime', JSON.stringify(employe.endtime));
    formData.append('credentials', JSON.stringify(employe.credentials));

    return this.httpClient.post<any>(`${this.base_url}/employes`, formData);
  }
}
