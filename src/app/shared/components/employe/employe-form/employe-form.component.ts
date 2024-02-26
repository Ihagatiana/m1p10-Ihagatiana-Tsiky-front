import { EmployeService } from './../employe.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.scss'],
})
export class EmployeFormComponent {
  form: FormGroup;
  loading = false;

  file: File | null = null;
  @Output() onCloseForm = new EventEmitter<boolean>();
  onEndDrop(file: File | null) {
    this.file = file;
  }
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly employeService: EmployeService
  ) {
    this.form = this.formbuilder.group({
      id: [null],
      createdAt: [{ value: new Date(), disabled: true }],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', Validators.required],
      starttime: [null, Validators.required],
      endtime: [null, Validators.required],
    });
  }

  submitForm() {
    const starttime = this.form.value['starttime'].split(':');
    const endtime = this.form.value['endtime'].split(':');
    this.loading = true;
    const dataToSend: any = {
      name: this.form.value['name'],
      firstname: this.form.value['firstname'],
      starttime: {
        hours: starttime[0],
        minutes: starttime[1],
      },
      endtime: {
        hours: endtime[0],
        minutes: endtime[1],
      },
      credentials: {
        email: this.form.value['email'],
        password: this.form.value['password'],
        roles: 'employe',
      },
      photos:
        this.file === null
          ? undefined
          : new Blob([this.file], { type: this.file.type }),
    };
    this.employeService.create(dataToSend).subscribe(
      (data) => {
        console.log(data);
        this.form.reset();

        this.onCloseForm.emit(false);
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
