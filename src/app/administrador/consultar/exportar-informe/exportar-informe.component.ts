import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Router, RouterModule } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

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
  constructor(public dialogRef: MatDialogRef<ExportarInformeComponent>) {}

  close(flag: boolean) {
    this.dialogRef.close(flag);
  }
}
