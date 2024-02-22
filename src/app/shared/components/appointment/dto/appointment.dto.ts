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
