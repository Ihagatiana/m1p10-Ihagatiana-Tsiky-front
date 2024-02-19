import { CreateServiceDto, UpdateServiceDto } from './../dto/service.dto';
import { Service, ServicesService } from './../../services.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss'],
})
export class ServicesFormComponent implements OnInit {
  form: FormGroup;
  loading = false;
  file: File | null = null;
  @Input() id: BehaviorSubject<Service['_id'] | null> = new BehaviorSubject<
    Service['_id'] | null
  >(null);
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly domSanitizer: DomSanitizer,
    private readonly servicesService: ServicesService
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

  onEndDrop(file: File | null) {
    console.log(file);
    this.file = file;
  }
  ngOnInit(): void {
    this.id.subscribe((id) => {
      if (id !== null) {
        this.loading = true;
        this.servicesService
          .findOne(id)
          .toPromise()
          .then((data) => {
            if (data) {
              const duration = `${
                data.duration.hours.toString().length === 2
                  ? data.duration.hours.toString()
                  : '0' + data.duration.hours.toString()
              }:${
                data.duration.minutes.toString().length === 2
                  ? data.duration.minutes
                  : '0' + data.duration.minutes
              }`;
              this.form.patchValue(data);
              this.form.get('id')?.patchValue(data._id);
              this.form.get('duration')?.patchValue(duration);
            }
          })
          .finally(() => {
            this.loading = false;
            this.form.markAsPristine();
          });
      }
    });
  }

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
    this.loading = true;
    console.log(this.file);
    if (this.id.value === null) {
      const time = this.form.value['duration'].split(':');
      const data: CreateServiceDto = {
        name: this.form.value['name'],
        description: this.form.value['description'],
        duration: {
          hours: time[0],
          minutes: time[1],
        },
        price: this.form.value['price'],
        photos:
          this.file === null
            ? undefined
            : new Blob([this.file], { type: this.file.type }),
      };

      this.servicesService
        .create(data)
        .toPromise()
        .then(console.log)
        .finally(() => {
          this.id.next(null);
          this.loading = false;
          this.form.reset();

          this.onCloseForm.emit(false);
        });
    } else {
      let data: UpdateServiceDto = {
        _id: this.id.value !== null ? this.id.value : undefined,
      };
      if (this.form.get('name')?.dirty) {
        data = { ...data, name: this.form.get('name')?.value };
      }
      if (this.form.get('description')?.dirty) {
        data = { ...data, description: this.form.get('description')?.value };
      }
      if (this.form.get('duration')?.dirty) {
        const time = this.form.get('duration')?.value.split(':');
        data = {
          ...data,
          duration: {
            hours: time[0],
            minutes: time[1],
          },
        };
      }
      if (this.form.get('price')?.dirty) {
        data = { ...data, price: this.form.get('price')?.value };
      }
      this.loading = true;
      this.servicesService
        .update(this.id.value, data)
        .toPromise()
        .then()
        .finally(() => {
          this.id.next(null);
          this.form.reset();
          this.loading = false;
          this.onCloseForm.emit(false);
        });
    }
  }
}
