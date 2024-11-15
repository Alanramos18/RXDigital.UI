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

  numResultados: number = 0;
  medicos = [
    { matricula: '12345', nombre: 'Dr. Juan Pérez', cantidadRecetas: 50 },
    { matricula: '67890', nombre: 'Dr. Ana Gómez', cantidadRecetas: 40 },
    // Agrega más médicos según sea necesario
  ];

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