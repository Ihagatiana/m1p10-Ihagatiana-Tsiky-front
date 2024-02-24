import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { formatNumberForDisplay } from 'src/app/libs/functions/formatter';
import { environment } from 'src/environment/environment';
import { Service, ServicesService } from '../../services.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent {
  @Input() id: BehaviorSubject<Service['_id'] | null> = new BehaviorSubject<
    Service['_id'] | null
  >(null);
  loading = false;

  base_url = environment.baseUrl;

  service = new BehaviorSubject<Service | undefined>(undefined);

  constructor(private readonly servicesService: ServicesService) {}
  ngOnInit() {
    this.id.subscribe((id) => {
      if (id !== null) {
        this.loading = true;
        this.servicesService
          .findOne(id)
          .toPromise()
          .then((data) => {
            if (data) {
              console.log(data);
              this.service.next({
                ...data,
                displayedPrice: formatNumberForDisplay(data.price),
              });
            }
          })
          .catch(() => {})
          .finally(() => {
            this.loading = false;
          });
      }
    });
  }
}
