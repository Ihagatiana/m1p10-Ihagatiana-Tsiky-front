import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent {
  @Input() className = '';
  @Input() elevation = 0;
  @Input() padding = false;
}
