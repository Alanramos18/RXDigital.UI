import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-rejectrx-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],


  template: `
    <h2 mat-dialog-title style="text-align: center; font-size: 35px;">¡La receta fue rechazada!</h2>
    <mat-dialog-content style="color:black; font-size: 20px; text-align: center; ">El paciente debe consultar con su médico!</mat-dialog-content>

    <mat-dialog-actions style="width: 80% display: flex; justify-content: space-evenly; ">
      <button style="background-color: red;color: white; font-size: 25px" mat-button color="warn" [mat-dialog-close]="false">Volver</button>
    </mat-dialog-actions>
  `,

})
export class RejectRxDialogComponent {}

 
