import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss'],
})
export class ServicesFormComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(
    private readonly formbuilder: FormBuilder,
    private domSanitizer: DomSanitizer
  ) {
    this.form = this.formbuilder.group({
      id: [null],
      createdAt: [{ value: new Date(), disabled: true }],
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: [null, Validators.required],
      price: [0, Validators.min(1)],
    });
  }
  ngOnInit(): void {}

  get title() {
    return this.form?.get('name');
  }

  get description() {
    return this.form?.get('description');
  }
  get duration() {
    return this.form?.get('duration');
  }
  get price() {
    return this.form?.get('price');
  }

  transform(html: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
