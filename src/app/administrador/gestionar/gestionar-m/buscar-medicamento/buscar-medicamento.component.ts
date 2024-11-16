import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { Medicamento } from '../../../../models/medicamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-medicamento',
  standalone: true,
  imports: [FormsModule, EncabezadoComponent, CommonModule],
  templateUrl: './buscar-medicamento.component.html',
  styleUrl: './buscar-medicamento.component.scss'
})
export class BuscarMedicamentoComponent {
  constructor(private router: Router) {}
  searchQuery: string = '';
  listaMedicamentos: Medicamento[] = [];
  // listaMedicamentos = [
  //   { commercialName: 'Paracetamol', presentation: 'Tabletas', concentration: 500 },
  //   { commercialName: 'Tafirol', presentation: 'Comprimidos', concentration: 200 },
  //   { commercialName: 'Bentiolitos', presentation: 'Tabletas', concentration: 300 },
  //   { commercialName: 'aaaaaa', presentation: 'Comprimidos', concentration: 85 },
  // ];
  buscar(){
    /// realizar busqueda de medicamento
  }

  modificarMedicamento(){

  }

  eliminarMedicamento(){

  }

  volver() {
    console.log('Volver');
    this.router.navigate(['/gestionar-medicamentos']);
  }
}
