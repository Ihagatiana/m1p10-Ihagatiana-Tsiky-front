import { ClientProfilService } from './service/client-profil.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
})
export class ClientProfileComponent {
  loading = false;
  form: FormGroup;
  src =
    localStorage.getItem('photo') ??
    'https://images.unsplash.com/photo-1611867967135-0faab97d1530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1352&amp;q=80';
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly profilService: ClientProfilService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    const id = localStorage.getItem('profile_id');
    if (id) {
      this.profilService.getProfile(id).subscribe((data) => {
        this.form.patchValue(data);
        if (data.credential?.length > 0)
          this.form.get('email')?.patchValue(data.credential[0].email ?? '');
        this.form.markAsPristine();
      });
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

      this.loading = true;
      this.profilService.updateProfile(profile_id, data).subscribe(
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
