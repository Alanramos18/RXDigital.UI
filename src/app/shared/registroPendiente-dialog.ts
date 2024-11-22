import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-registroPendiente-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],


  template: `
  
    <h2 mat-dialog-title style="text-align: center; font-size: 35px;"> SOLICITUD DE REGISTRO ENVIADA</h2><br>
    <mat-dialog-content style="color:black; font-size: 30px; text-align: center;" >Tu solicitud ha sido procesada con éxito y está en estado pendiente de aprobación..</mat-dialog-content>
    
    <mat-dialog-actions style="width: 80% display: flex; justify-content: space-evenly; ">
      <button  style="background-color: green; color:white; font-size: 25px" mat-button [mat-dialog-close]="false">Salir</button>
    </mat-dialog-actions>
    
  `,

})
export class RegistroPendienteDialogComponent {}