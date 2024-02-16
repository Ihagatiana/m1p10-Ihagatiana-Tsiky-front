import { CreateServiceDto } from './../dto/service.dto';
import { Service, ServicesService } from './../../services.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() id: Service['id'] | null = null;
  constructor(
    private readonly formbuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private servicesService: ServicesService
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
  @Output() onCloseForm = new EventEmitter<boolean>();
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

  submitForm() {
    const data = this.form.value;
    this.loading = true;
    if (this.id === null) {
      const time = this.form.value['duration'].split(':');
      const data: CreateServiceDto = {
        name: this.form.value['name'],
        description: this.form.value['description'],
        // duration: {
        //   hours: time[0],
        //   minutes: time[1],
        // },
        duration: 0,
        price: this.form.value['price'],
      };
      this.servicesService
        .create(data)
        .toPromise()
        .then(console.log)
        .finally(() => {
          this.loading = false;
          this.onCloseForm.emit(false);
        });
    }
  }
}
