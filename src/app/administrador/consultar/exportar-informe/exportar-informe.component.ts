import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar-informe.component.html',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, FormsModule],
  styleUrls: ['./exportar-informe.component.scss'],
})
export class ExportarInformeComponent {
  selectedFormat: string = '';
  formats: string[] = ['PDF', 'Excel', 'CSV'];

  volver(): void {
    // Implement navigation logic to go back
  }

  exportar(): void {
    // Implement export logic based on selected format
    alert(`Exporting as ${this.selectedFormat}`);
  }

  cancelar(): void {
    // Implement cancel logic
    this.selectedFormat = '';
  }
}
