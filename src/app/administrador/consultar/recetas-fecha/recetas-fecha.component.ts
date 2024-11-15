import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receta } from '../../../models/receta';

@Component({
  selector: 'app-recetas-fecha',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule,FormsModule],
  templateUrl: './recetas-fecha.component.html',
  styleUrl: './recetas-fecha.component.scss'
})
export class RecetasFechaComponent {

  recetas: Receta[];
  recetasFiltradas: Receta[];
  codeFilter = "";

  filterCodes(){}

}
