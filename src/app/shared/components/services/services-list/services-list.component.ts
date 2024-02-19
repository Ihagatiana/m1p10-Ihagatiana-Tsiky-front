import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';
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
  page = new BehaviorSubject<number>(1);
  pageNumbers = 0;
  elementPerPage = 4;
  services: Service[] = [];
  total = new BehaviorSubject<number>(0);

  id: BehaviorSubject<Service['_id'] | null> = new BehaviorSubject<
    Service['_id'] | null
  >(null);

  title = "Ajout d'un service";
  showForm: boolean = false;

  base_url = environment.baseUrl;
  constructor(public service: ServicesService) {}
  ngOnInit(): void {
    this.id.subscribe((id) => {
      if (id !== null) {
        this.title = `Modification d'un service`;
      }
    });
    this.fetchAll();
    this.total.subscribe((elt) => {
      this.pageNumbers = Math.ceil(elt / this.elementPerPage);
    });
  }
  setMode(value: 'list' | 'grid') {
    this.displayMode = value;
  }

  fetchAll() {
    this.loading = true;
    this.service
      .getAll({
        limit: this.elementPerPage,
        offset: (this.page.value - 1) * this.elementPerPage,
      })
      .subscribe((response) => {
        this.services = response.data;
        this.total.next(response.total);
        this.loading = false;
      });
  }

  onToogleFormCreate(value: boolean) {
    this.showForm = value;
    if (value === false) {
      this.fetchAll();
    }
  }

  onToogleFormUpdate = (id: string) => {
    this.id.next(id);
    this.showForm = true;
  };

  onPaginate(page: number) {
    this.page.next(page);
    this.fetchAll();
  }

  onDelete(id: string) {
    this.service.delete(id).subscribe(
      (data) => {
        this.fetchAll();
      },
      (errr) => {
        console.log(errr);
      }
    );
  }
}
