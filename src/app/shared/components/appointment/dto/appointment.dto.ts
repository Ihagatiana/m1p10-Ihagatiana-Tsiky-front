import { Time } from '@angular/common';

export type ReponseAppointment = {
  appointments?: {
    clients?: {
      name: string;
      firstname: string;
    };
    date: string;
  };
  starttime: Time;
  endtime: Time;
  services?: {
    commission: number;
    duration: Time;
    name: string;
    price: number;
  };
  employes?: any;
};

export type CreateAppointmentDto = {
  date: Date;
  clients: string;
  starttime: Time;

  appservices: CreateAppServiceDto[];
};

export type CreateAppServiceDto = {
  services: number;
  employes: number;
  order: number;

  states: number;
};
