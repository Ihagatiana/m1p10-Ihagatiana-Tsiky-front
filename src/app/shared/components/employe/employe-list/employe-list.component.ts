import { EmployeService } from './../employe.service';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss'],
})
export class EmployeListComponent {
  loading = false;
  page = new BehaviorSubject<number>(1);
  base_url = environment.baseUrl;
  title = "Ajout d'un employé";

  pageNumbers = 0;
  elementPerPage = 4;
  employes: any[] = [];
  total = new BehaviorSubject<number>(0);

  showForm: boolean = false;


  constructor(private readonly employesService: EmployeService) {}

  ngOnInit() {
    this.fetchAll();
    this.total.subscribe((elt) => {
      this.pageNumbers = Math.ceil(elt / this.elementPerPage);
    });
  }

  fetchAll() {
    this.loading = true;
    this.employesService
      .getAll({
        limit: this.elementPerPage,
        offset: (this.page.value - 1) * this.elementPerPage,
      })
      .subscribe((response) => {
        this.employes = response.data;
        this.total.next(response.total);
        this.loading = false;
      });
  }
  onPaginate(page: number) {
    this.page.next(page);
    this.fetchAll();
  }

  onToogleFormCreate(value: boolean) {
    this.showForm = value;
    if (value === false) {
      this.fetchAll();
    }
  }
}
