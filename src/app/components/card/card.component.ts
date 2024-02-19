import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { PaperComponent } from '../paper/paper.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, PaperComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() content = '';
  @Input() imgUrl: string | null = null;
  @Input() className = '';
  @Input() alt = '';

  @Input() allowRemove = false;

  @Output() onDeleteCard: EventEmitter<void> = new EventEmitter();

  @Output() onClick = new EventEmitter<any>();

  clicCard = () => {
    this.onClick.emit();
  };

  deleteCard() {
    this.onDeleteCard.emit();
  }
}
