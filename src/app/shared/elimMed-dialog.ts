import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@Component({
  selector: 'app-elimMed-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],


  template: `
    <h2 mat-dialog-title> ELIMINAR MEDICAMENTO</h2>
    <mat-dialog-content>¿Quiere eliminar el medicamento?</mat-dialog-content>
    
    <mat-dialog-actions>
      <button  style="background-color: green; color:white;" mat-button [mat-dialog-close]="false">Sí</button>
      <button style="background-color: red;color: white;" mat-button color="warn" [mat-dialog-close]="true">No</button>
    </mat-dialog-actions>
  `,

})
export class ElimMedDialogComponent {}

 