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
  src =
    localStorage.getItem('photo') ??
    'https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80';

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
    this.loading = true;
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
          this.form.markAsPristine();
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
  submitForm() {
    const profile_id = localStorage.getItem('profile_id');
    if (profile_id) {
      let data = {};

      if (this.form.get('name') !== null && this.form.get('name')?.dirty) {
        data = { ...data, name: this.form.get('name')!.value };
      }

      if (
        this.form.get('firstname') !== null &&
        this.form.get('firstname')?.dirty
      ) {
        data = { ...data, firstname: this.form.get('firstname')!.value };
      }

      if (this.form.get('email') !== null && this.form.get('email')?.dirty) {
        data = {
          ...data,
          credential: { email: this.form.get('email')!.value },
        };
      }

      if (
        this.form.get('starttime') !== null &&
        this.form.get('starttime')?.dirty
      ) {
        const starttime = this.form.value['starttime'].split(':');
        data = {
          ...data,
          starttime: {
            hours: starttime[0],
            minutes: starttime[1],
          },
        };
      }

      if (
        this.form.get('endtime') !== null &&
        this.form.get('endtime')?.dirty
      ) {
        const endtime = this.form.value['endtime'].split(':');
        data = {
          ...data,
          endtime: {
            hours: endtime[0],
            minutes: endtime[1],
          },
        };
      }
      this.loading = true;
      this.profilService.udpate(profile_id, data).subscribe(
        () => {
          this.form.markAsPristine();
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
