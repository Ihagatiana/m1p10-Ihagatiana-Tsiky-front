import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Input() title: string = '';

  closeModal() {
    this.showModal = false;
    this.onClose.emit(false);
  }

  @Output() onClose = new EventEmitter<boolean>();
}
