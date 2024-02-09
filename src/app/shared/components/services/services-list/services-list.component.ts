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
  displayMode: 'list' | 'grid' = 'list';
  services: Service[] = [];
  constructor(private readonly service: ServicesService) {}
  ngOnInit(): void {
    this.fetchAll();
  }
  setMode(value: 'list' | 'grid') {
    this.displayMode = value;
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
        {
          id: 1,
          name: 'Services 1',
          duration: { hours: 0, minutes: 30 },
          price: 500,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
          id: 1,
          name: 'Services 2',
          duration: { hours: 1, minutes: 30 },
          price: 450,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
          id: 1,
          name: 'Services 3',
          duration: { hours: 2, minutes: 0 },
          price: 600,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
          id: 1,
          name: 'Services 4',
          duration: { hours: 0, minutes: 45 },
          price: 1500,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
      ];
      this.loading = false;
    }, 500);
  }
}
