import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar-informe.component.html',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, FormsModule,RouterModule],
  styleUrls: ['./exportar-informe.component.scss'],
})
export class ExportarInformeComponent {
  [x: string]: any;
  selectedFormat: string = '';
  constructor(private router: Router) {}

  volver(): void {
    // Implement navigation logic to go back
    this['router'].navigate(['/inicio-consultar']);
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
