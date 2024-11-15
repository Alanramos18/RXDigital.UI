import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { EmitirRecetaComponent } from '../emitir-receta/emitir-receta.component';
import { Router } from '@angular/router';
import { MsjEmergenteComponent } from '../../../msj-emergente/msj-emergente.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancelar-receta',
  standalone: true,
  imports: [CommonModule, EmitirRecetaComponent, MsjEmergenteComponent],
  templateUrl: './cancelar-receta.component.html',
  styleUrl: './cancelar-receta.component.scss'
})
export class CancelarRecetaComponent {

  constructor(public dialogRef: MatDialogRef<CancelarRecetaComponent>){}

  close(flag: boolean) {
    this.dialogRef.close(flag);
  }
}
