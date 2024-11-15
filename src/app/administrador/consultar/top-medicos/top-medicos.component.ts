import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-medicos',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, FormsModule],
  templateUrl: './top-medicos.component.html',
  styleUrl: './top-medicos.component.scss'
})
export class TopMedicosComponent {

  constructor(private router: Router) {}

  numResultados: number = 0; // Número de resultados ingresado por el usuario
  medicos = [
    { matricula: '12345', nombre: 'Dr. García', cantidadRecetas: 120 },
    { matricula: '23456', nombre: 'Dra. López', cantidadRecetas: 110 },
    { matricula: '34567', nombre: 'Dr. Martínez', cantidadRecetas: 95 },
    { matricula: '45678', nombre: 'Dra. Fernández', cantidadRecetas: 85 },
    // Agrega más médicos según sea necesario
  ];

  get medicosFiltrados() {
    return this.medicos.slice(0, this.numResultados); // Mostrar solo los primeros 'numResultados' médicos
  }

  exportar() {
    // Lógica para exportar la lista de médicos con más recetas
    this.router.navigate(['/exportar-informe']);
  }

  volver() {
    // Lógica para volver al panel de consulta
    // Por ejemplo, usando el router para navegar a otra ruta
    this.router.navigate(['/inicio-consultar']);
  }
}
