import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalElements = 0;
  @Input() elementPerPage = 1;
  @Input() inlineflex = '';
  @Input() currentPage = 1;
  @Input() pageNumbers = 0;

  @Output() onPaginate: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
    this.pageNumbers = Math.ceil(this.totalElements / this.elementPerPage);
  }
  onPrev() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.onPaginate.emit(this.currentPage);
    }
  }
  onNext() {
    if (this.currentPage < this.pageNumbers) {
      this.currentPage++;
      this.onPaginate.emit(this.currentPage);
    }
  }

  onPaginateLocaly(page: number) {
    this.currentPage = page;
    this.onPaginate.emit(page);
  }

  getArrayFromPageNumbers() {
    const tableau: number[] = [];
    for (let i = 1; i <= this.pageNumbers; i++) {
      tableau.push(i);
    }
    return tableau;
  }
}
