import { PaymentService } from './../payment.service';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent {
  @Input() role: 'client' | 'manager' = 'manager';
  loading = false;

  page = new BehaviorSubject<number>(1);
  pageNumbers = 0;
  elementPerPage = 8;
  payments: any[] = [];
  total = new BehaviorSubject<number>(0);
  constructor(private readonly paymentService: PaymentService) {}

  ngOnInit() {
    this.fetchAll();
    this.total.subscribe((elt) => {
      this.pageNumbers = Math.ceil(elt / this.elementPerPage);
    });
  }

  fetchAll() {
    if (this.role === 'manager') {
      this.fetchManager();
    } else if (this.role === 'client') {
      this.fetchClient();
    }
  }

  fetchManager() {
    this.loading = true;
    this.paymentService
      .getAll({
        limit: this.elementPerPage,
        offset: (this.page.value - 1) * this.elementPerPage,
      })
      .subscribe(
        (response) => {
          this.total.next(response.total);
          this.payments = response.data;
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }

  fetchClient() {
    const id = localStorage.getItem('profile_id');
    if (id) {
      this.paymentService
        .getByClientId(id, {
          limit: this.elementPerPage,
          offset: (this.page.value - 1) * this.elementPerPage,
        })
        .subscribe(
          (response) => {
            this.total.next(response.total);
            this.payments = response.data;
            this.loading = false;
          },
          () => (this.loading = false)
        );
    }
  }

  onPaginate(page: number) {
    this.page.next(page);
    this.fetchAll();
  }
}
