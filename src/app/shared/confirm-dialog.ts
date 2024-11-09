import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {
    MatDialogModule
  } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>¿Estás seguro?</h2>
    <mat-dialog-content>¿Quieres eliminar al paciente?</mat-dialog-content>
    <mat-dialog-content>¡Se eliminaran todas sus recetas!</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Cancelar</button>
      <button mat-button color="warn" [mat-dialog-close]="true">Borrar</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {}
