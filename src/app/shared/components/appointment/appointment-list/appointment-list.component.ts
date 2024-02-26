import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { ReponseAppointment } from '../dto/appointment.dto';
import { humanizeDate } from 'src/app/libs/functions/formatter';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent {
  showForm = false;

  loading = false;

  page = new BehaviorSubject<number>(1);
  pageNumbers = 0;
  elementPerPage = 8;
  appointments: ReponseAppointment[] = [];
  total = new BehaviorSubject<number>(0);

  constructor(public readonly service: AppointmentService) {}
  onToogleForm(value: boolean) {
    this.showForm = value;
    if (value === false) {
      this.fetchAll();
    }
  }

  ngOnInit() {
    this.fetchAll();
    this.total.subscribe((elt) => {
      this.pageNumbers = Math.ceil(elt / this.elementPerPage);
    });
  }

  fetchAll() {
    this.loading = true;
    this.service
      .getAll({
        limit: this.elementPerPage,
        offset: (this.page.value - 1) * this.elementPerPage,
      })
      .subscribe(
        (response) => {
          this.appointments = response.data.map((elt) => {
            return {
              ...elt,
              appointments: {
                ...elt.appointments,
                date: elt.appointments?.date
                  ? humanizeDate(new Date(elt.appointments.date))
                  : 'N/A',
              },
            };
          });
          this.total.next(response.total);
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        }
      );
  }
  onPaginate(page: number) {
    this.page.next(page);
    this.fetchAll();
  }
}
