import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-elimMed-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],


  template: `
  
    <h2 mat-dialog-title style="text-align: center; font-size: 35px;"> ELIMINAR MEDICAMENTO</h2><br>
    <mat-dialog-content style="color:black; font-size: 30px; text-align: center;" >¿Quiere eliminar el medicamento?</mat-dialog-content>
    
    <mat-dialog-actions style="width: 80% display: flex; justify-content: space-evenly; ">
      <button  style="background-color: green; color:white; font-size: 25px" mat-button (click)="close(true)">Sí</button>
      <button style="background-color: red;color: white; font-size: 25px" mat-button color="warn" (click)="close(false)">No</button>
    </mat-dialog-actions>
    
  `,

})
export class ElimMedDialogComponent {

  constructor(private dialogRef: MatDialogRef<ElimMedDialogComponent>) {}

  close(flag: boolean) {
    this.dialogRef.close(flag);
  }
}

 