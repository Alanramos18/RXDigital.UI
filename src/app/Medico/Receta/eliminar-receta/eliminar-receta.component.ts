import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VerRecetasPacienteComponent } from '../../Paciente/ver-recetas-paciente/ver-recetas-paciente.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-receta',
  standalone: true,
  imports: [CommonModule, VerRecetasPacienteComponent],
  templateUrl: './eliminar-receta.component.html',
  styleUrl: './eliminar-receta.component.scss'
})
export class EliminarRecetaComponent {
  
  constructor(public dialogRef: MatDialogRef<EliminarRecetaComponent>){}

  close(flag: boolean) {
    this.dialogRef.close(flag);
  }
}
