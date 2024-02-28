import { EmployeService } from './../../employe/employe.service';
import { Service, ServicesService } from './../../services.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppointmentService } from './../appointment.service';
import { CreateAppointmentDto } from './../dto/appointment.dto';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent {
  form: FormGroup;

  loading = false;
  employes: any[] = [];
  services: Service[] = [];
  @Output() onCloseForm = new EventEmitter<boolean>();
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly appointmentService: AppointmentService,
    private readonly serviceService: ServicesService,
    private readonly employesService: EmployeService
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      clients: [null, Validators.required],
      date: [null, Validators.required],
      state: [1],
      starttime: [null],
      appservices: this.formBuilder.array([]),
    });
  }

  ngOnInit() {
    this.loading = true;
    Promise.all([
      this.serviceService.getAll().toPromise(),
      this.employesService.getAll().toPromise(),
    ])
      .then(([serviceResponse, employeResponse]) => {
        this.services = serviceResponse?.data ?? [];
        this.employes = employeResponse?.data ?? [];
      })
      .finally(() => (this.loading = false));
  }

  get clients() {
    return this.form.get('clients');
  }

  get date() {
    return this.form.get('date');
  }

  get starttime() {
    return this.form.get('starttime');
  }

  get appservices() {
    return this.form.controls['appservices'] as FormArray;
  }

  addService() {
    const service = this.appservices;
    let newGroup = this.formBuilder.group({
      services: [null, Validators.required],
      employes: [null, Validators.required],
      order: [1, Validators.required],
    });
    service.push(newGroup);
  }

  submitForm() {
    const profile_id = localStorage.getItem('profile_id');
    if (profile_id !== null) {
      this.loading = true;
      const time = this.starttime?.value.split(':');
      const data: CreateAppointmentDto = {
        clients: profile_id,
        date: new Date(this.date?.value.toString()),
        starttime: { hours: time[0], minutes: time[1] },
        appservices: this.appservices.value.map((elt: any) => {
          return {
            services: elt.services,
            employes: elt.employes,
            order: elt.order,
            states: 1,
          };
        }),
      };
      this.appointmentService.create(data).subscribe(
        () => {
          this.loading = false;
          this.form.reset();
          this.onCloseForm.emit(false);
        },
        () => {
          this.loading = false;
        }
      );
    }
  }

  onCancel() {
    this.form.reset();
    this.onCloseForm.emit(false);
  }
}
