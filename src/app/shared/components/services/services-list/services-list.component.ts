import { Component, Input } from '@angular/core';
import { Service, ServicesService } from '../../services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent {
  loading = false;
  @Input() canSwitchView = false;
  services: Service[] = [];
  constructor(private readonly service: ServicesService) {}
  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    // this.loading = true;
    // this.service
    //   .getAll()
    //   .subscribe((data) => {
    //     this.services = data;
    //     this.loading = false;
    //   })
    //   .unsubscribe();

    this.loading = true;
    setTimeout(() => {
      this.services = [
        { id: 1, name: 'Services 1' },
        { id: 2, name: 'Services 2' },
        { id: 3, name: 'Services 3' },
        { id: 4, name: 'Services 4' },
      ];
      this.loading = false;
    }, 10000);
  }
}
