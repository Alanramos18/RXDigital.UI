import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-aceptarUsuario-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],


  template: `
  
    <h2 mat-dialog-title style="text-align: center; font-size: 35px;">Usuario Aceptado!</h2><br>
    <mat-dialog-content style="color:black; font-size: 30px; text-align: center;">Se ha enviado email para dar aviso al usuario.</mat-dialog-content>
    
    <mat-dialog-actions style="width: 80% display: flex; justify-content: space-evenly; ">
      <button  style="background-color: green; color:white; font-size: 25px" mat-button [mat-dialog-close]="false">Salir</button>
    </mat-dialog-actions>
    
  `,

})
export class AceptarUsuarioDialogComponent {}