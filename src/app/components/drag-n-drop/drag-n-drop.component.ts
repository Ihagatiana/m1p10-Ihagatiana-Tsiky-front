import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-n-drop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss'],
})
export class DragNDropComponent {
  isDragOver: boolean = false;
  imageSrc: string | ArrayBuffer | null = null;
  @Input() className = '';

  @Output() onDropEmit = new EventEmitter<File>();

  constructor() {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.handleFile(file);
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.item(0);
    if (file) this.handleFile(file);
  }

  handleFile(file: File | null) {
    if (file && file.type.startsWith('image/')) {
      this.onDropEmit.emit(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result ?? '';
      };
      reader.readAsDataURL(file);
    } else {
      alert('Veuillez sélectionner un fichier image valide.');
    }
  }

  onSelectedFile(event: any) {
    const file = event.target.files[0];

    if (file) this.handleFile(file);
  }
}
