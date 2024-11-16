import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { DetalleRecetaComponent } from '../../../DetalleReceta/detalle-receta.component';



@Component({
  selector: 'app-ver-detalle-receta',
  standalone: true,
  imports: [CommonModule,EncabezadoComponent], 
  templateUrl: './ver-detalle-receta.component.html',
  styleUrl: './ver-detalle-receta.component.scss'
})

export class VerDetalleRecetaComponent {

  constructor(private router: Router) { }
  paciente = {
    nombre: 'Juan Pérez',
    dni: '12345678',
    obraSocial: 'OSDE'
  };

  medico = {
    nombre: 'Dra. María López',
    especialidad: 'Cardiología',
    matricula: '4567'
  };

  receta = {
    diagnostico: 'Hipertensión arterial',
    comentarios: 'Tomar el medicamento después de las comidas',
    formaEnvio: 'Email y WhatsApp',
    medicamentos: [
      { nombre: 'Medicamento A', presentacion: 'Tableta', concentracion: '500mg', cantidad: 30, indicaciones: 'Tomar 1 tableta cada 8' },
      { nombre: 'Medicamento B', presentacion: 'Jarabe', concentracion: '100ml', cantidad: 2, indicaciones: 'Tomar 5ml cada 6 horas' }
    ],
    codigo: 'AB125',
     fechaEmision: '14/09/2024',
     fechaVencimiento: '14/12/2024'
  };


  volver() {
    console.log("Volver a la pantalla anterior");
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
