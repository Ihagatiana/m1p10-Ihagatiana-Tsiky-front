import { ProfileService } from './service/profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  loading = false;
  fileRetrieved: File | null = null;
  file: File | null = null;
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly profilService: ProfileService
  ) {
    this.initForm();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
      starttime: ['', Validators.required],
      endtime: ['', Validators.required],
    });
  }

  initForm() {
    const profile_id = localStorage.getItem('profile_id');
    if (profile_id) {
      this.profilService.getById(decodeURIComponent(profile_id)).subscribe(
        (data: any) => {
          const starttime = `${
            data.starttime.hours.toString().length === 2
              ? data.starttime.hours
              : '0' + data.starttime.hours
          }:${
            data.starttime.minutes.toString().length === 2
              ? data.starttime.minutes
              : '0' + data.starttime.minutes
          }`;
          const endtime = `${
            data.endtime.hours.toString().length === 2
              ? data.endtime.hours
              : '0' + data.endtime.hours
          }:${
            data.endtime.minutes.toString().length === 2
              ? data.endtime.minutes
              : '0' + data.endtime.minutes
          }`;
          this.form.patchValue(data);
          this.form.get('email')?.patchValue(data.credential.email);
          this.form.get('starttime')?.patchValue(starttime);
          this.form.get('endtime')?.patchValue(endtime);
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    }
  }
}
