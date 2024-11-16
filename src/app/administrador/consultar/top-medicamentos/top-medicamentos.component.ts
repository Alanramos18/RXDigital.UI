import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-medicamentos',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, FormsModule],
  templateUrl: './top-medicamentos.component.html',
  styleUrl: './top-medicamentos.component.scss'
})
export class TopMedicamentosComponent {
  

  constructor(private router: Router) { }

  numResultados: number = 0; // Número de resultados ingresado por el usuario
  medicos = [];

  get medicamentosFiltrados() {
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
