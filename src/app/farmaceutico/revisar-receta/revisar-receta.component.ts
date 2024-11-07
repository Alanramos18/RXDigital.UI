import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../encabezado/encabezado.component';
import { DetalleRecetaComponent } from '../../DetalleReceta/detalle-receta.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-revisar-receta',
  standalone: true,
  imports: [EncabezadoComponent, DetalleRecetaComponent, CommonModule, FormsModule],
  templateUrl: './revisar-receta.component.html',
  styleUrl: './revisar-receta.component.scss'
})
export class RevisarRecetaComponent {

  constructor(private router: Router) {}

  aceptarReceta() {
    alert('La receta quedó aceptada correctamente.');
    /// acepta la receta, muestra el mensaje y vuelve a la pantalla de búsqueda
    this.router.navigate(['/buscar-receta']);
  }

  rechazarReceta() {
    this.router.navigate(['/motivo-rechazo']);
  }

  buscarOtraReceta() {
    this.router.navigate(['/buscar-receta']);
  }
}
