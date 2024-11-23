import { Component } from '@angular/core';
import { RevisarRecetaComponent } from '../revisar-receta/revisar-receta.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MsjEmergenteComponent } from '../../msj-emergente/msj-emergente.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-motivo-rechazo',
  standalone: true,
  imports: [RevisarRecetaComponent, MsjEmergenteComponent, FormsModule],
  templateUrl: './motivo-rechazo.component.html',
  styleUrl: './motivo-rechazo.component.scss'
})

export class MotivoRechazoComponent {
  motivoRechazo = '';
  constructor(public dialogRef: MatDialogRef<MotivoRechazoComponent>) {}
  
  confirmarRechazo() {
    if (this.motivoRechazo.trim() === '') {
      alert('Por favor, ingrese el motivo del rechazo.');
      return;
    }
    
    this.dialogRef.close({ res: true, motivoRechazo: this.motivoRechazo });
  }

  cancelarRechazo() {
    this.dialogRef.close({ res: false, motivoRechazo: null });
  }
}
