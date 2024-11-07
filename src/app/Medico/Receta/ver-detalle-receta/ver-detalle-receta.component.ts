import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../../../encabezado/encabezado.component';
import { DetalleRecetaComponent } from '../../../DetalleReceta/detalle-receta.component';



@Component({
  selector: 'app-ver-detalle-receta',
  standalone: true,
  imports: [CommonModule,EncabezadoComponent, DetalleRecetaComponent], 
  templateUrl: './ver-detalle-receta.component.html',
  styleUrl: './ver-detalle-receta.component.scss'
})

export class VerDetalleRecetaComponent {

  constructor(private router: Router) { }

  volver() {
    console.log("Volver a la pantalla anterior");
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
