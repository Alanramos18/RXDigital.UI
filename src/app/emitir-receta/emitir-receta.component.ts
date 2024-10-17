import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necesario
import { Router } from '@angular/router';

@Component({
  selector: 'app-emitir-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emitir-receta.component.html',
  styleUrl: './emitir-receta.component.scss'
})
export class EmitirRecetaComponent {

  constructor(private router: Router) {}

    medico = {
    nombre: '',
    especialidad:'',
    matricula: ''
  };

  paciente = {
    nombre: '',
    dni: '',
    
  };

  medicamento = {
    nombreComercial: '',
    presentacion:'',
    concentracion: ''
  };

  informacion = {
    diagnostico: '',
    indicaciones: ''
  };

  enviarPorWhatsapp = false;
  enviarPorEmail = true;

  emitirReceta() {
    console.log('Receta emitida:', {
      medico: this.medico,
      paciente: this.paciente,
      medicamento: this.medicamento,
      informacion: this.informacion,
      enviarPorWhatsapp: this.enviarPorWhatsapp,
      enviarPorEmail: this.enviarPorEmail
    });
    // Lógica para emitir la receta
    this.router.navigate(['/emision-correcta']);
  }

  cancelar() {
    // Lógica para cancelar la operación
    console.log('Operación cancelada');
    this.router.navigate(['/cancelar-receta']);
  }
}
