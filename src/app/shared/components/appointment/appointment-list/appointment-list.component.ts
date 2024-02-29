import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { ReponseAppointment } from '../dto/appointment.dto';
import { humanizeDate } from 'src/app/libs/functions/formatter';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent {
  @Input() role: 'client' | 'employe' = 'client';
  showForm = false;

  loading = false;

  page = new BehaviorSubject<number>(1);
  pageNumbers = 0;
  elementPerPage = 8;
  appointments: ReponseAppointment[] = [];
  total = new BehaviorSubject<number>(0);

  constructor(
    public readonly service: AppointmentService,
    private readonly authService: AuthServiceService
  ) {}
  onToogleForm(value: boolean) {
    this.showForm = value;
    if (value === false) {
      this.fetchAll();
    }
  }

  ngOnInit() {
    this.authService.loggedInRole().subscribe((data) => {
      if (data) this.role = data as 'client' | 'employe';
    });
    this.fetchAll();
    this.total.subscribe((elt) => {
      this.pageNumbers = Math.ceil(elt / this.elementPerPage);
    });
  }

  fetchAll() {
    if (this.role === 'employe') {
      this.fetchEmploye();
    } else if (this.role === 'client') {
      this.fetchClient();
    }
  }

  fetchEmploye() {
    const id = localStorage.getItem('profile_id');
    if (id) {
      this.loading = true;
      this.service
        .getAllEmploye(id, {
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
  }

  fetchClient() {
    const id = localStorage.getItem('profile_id');
    if (id) {
      this.loading = true;
      this.service
        .getAllClient(id, {
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
  }
  onPaginate(page: number) {
    this.page.next(page);
    this.fetchAll();
  }

  validateOne(ids: string) {
    this.loading = true;
    this.service.validate([ids]).subscribe(
      () => {
        this.loading = false;
        this.fetchEmploye();
      },
      () => (this.loading = false)
    );
  }
}
