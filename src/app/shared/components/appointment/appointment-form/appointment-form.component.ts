import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent {
  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      clients: [null, Validators.required],
      date: [null, Validators.required],
      state: [1],
      starttime: [null],
      appservices: this.formBuilder.array([]),
    });
  }

  get clients() {
    return this.form.get('clients');
  }

  get starttime() {
    return this.form.get('starttime');
  }

  get appservices() {
    return this.form.get('appservices') as FormArray;
  }

  addService() {
    const service = this.appservices;
    service.push(
      this.formBuilder.group({
        services: [null, Validators.required],
        employes: [null, Validators.required],
        order: [1, Validators.required],
      })
    );
  }

  submitForm() {
    console.log(this.form.value);
  }
}
