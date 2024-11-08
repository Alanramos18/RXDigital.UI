import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../models/paciente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar-paciente',
  templateUrl: './modificar-paciente.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./modificar-paciente.component.scss']
})
export class ModificarPacienteComponent {
  paciente: Paciente;

  // Define the onSubmit method
  onSubmit() {
    //console.log('Paciente modificado:', this.paciente);
    // Add logic to handle the submission, such as an API call
  }

  onModificar() {
    // console.log('Modificación cancelada');
     // Logic for canceling the modification, like navigating back or resetting the form
   }
  // Define the onCancel method
  onCancel() {
   // console.log('Modificación cancelada');
    // Logic for canceling the modification, like navigating back or resetting the form
  }
}
