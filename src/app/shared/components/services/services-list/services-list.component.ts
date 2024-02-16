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
  displayMode: 'list' | 'grid' = 'grid';
  services: Service[] = [];
  showForm: boolean = false;
  constructor(private readonly service: ServicesService) {}
  ngOnInit(): void {
    this.fetchAll();
  }
  setMode(value: 'list' | 'grid') {
    this.displayMode = value;
  }

  fetchAll() {
    this.loading = true;
    this.service.getAll().subscribe((data) => {
      this.services = data;
      this.loading = false;
    });
  }

  onToogleForm(value: boolean) {
    this.showForm = value;
  }
}
