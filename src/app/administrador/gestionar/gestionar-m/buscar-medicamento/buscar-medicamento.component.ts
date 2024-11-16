import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { Router } from '@angular/router';
import { Medicamento } from '../../../../models/medicamento';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog';

@Component({
  selector: 'app-buscar-medicamento',
  standalone: true,
  imports: [EncabezadoComponent,FormsModule, CommonModule],
  templateUrl: './buscar-medicamento.component.html',
  styleUrl: './buscar-medicamento.component.scss'
})
export class BuscarMedicamentoComponent {

  constructor(private router: Router, private dialog:MatDialog) {}

  searchQuery: string = '';
  

  
  listaMedicamentos = [
    { commercialName: 'Paracetamol', presentation: 'Tabletas', concentration: 500 },
    { commercialName: 'Tafirol', presentation: 'Comprimidos', concentration: 200 },
    { commercialName: 'Bentiolitos', presentation: 'Tabletas', concentration: 300 },
    { commercialName: 'aaaaaa', presentation: 'Comprimidos', concentration: 85 },
  ];
  
  buscar(){
    /// realizar busqueda de medicamento
  }

  modificarMedicamento(){

  }

  eliminarMedicamento(){
    const dialoRef = this.dialog.open(ConfirmDialogComponent);


  }

  volver() {
    console.log('Volver');
    this.router.navigate(['/gestionar-medicamentos']);
  }

}
