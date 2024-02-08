import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from '../paper/paper.component';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, PaperComponent],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() loading = false;
  @Input() spinnerClassName = '';
}
