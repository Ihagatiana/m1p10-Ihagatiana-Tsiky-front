import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
})
export class AppointmentListComponent {
  showForm = false;

  onToogleForm(value: boolean) {
    this.showForm = value;
  }
}
