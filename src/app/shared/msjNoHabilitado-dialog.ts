import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-msjNoHabilitado-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],


  template: `
  
    <h2 mat-dialog-title style="text-align: center; font-size: 35px; color:red; margin-top: 20px;"> PACIENTE DESHABILITADO</h2><br>
    <mat-dialog-content style="color:black; font-size: 25px; text-align: center;" >
        No se puede generar receta porque el paciente está deshabilitado para recibir recetas.
    </mat-dialog-content>
    
  `,

})
export class msjNoHabilitadoDialogComponent {}