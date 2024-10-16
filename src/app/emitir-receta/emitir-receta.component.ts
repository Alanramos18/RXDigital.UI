import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import necesario

@Component({
  selector: 'app-emitir-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emitir-receta.component.html',
  styleUrl: './emitir-receta.component.scss'
})
export class EmitirRecetaComponent {
    medico = {
    nombre: '',
    matricula: ''
  };

  paciente = {
    nombre: '',
    dni: '',
    obraSocial: ''
  };

  medicamento = {
    lote: '',
    nombreComercial: '',
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
  }

  cancelar() {
    // Lógica para cancelar la operación
    console.log('Operación cancelada');
  }
}
