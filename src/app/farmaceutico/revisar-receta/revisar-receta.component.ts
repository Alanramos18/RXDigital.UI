import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../encabezado/encabezado.component';
import { DetalleRecetaComponent } from '../../DetalleReceta/detalle-receta.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MsjAceptarComponent } from '../../msj-aceptar/msj-aceptar.component';

@Component({
  selector: 'app-revisar-receta',
  standalone: true,
  imports: [EncabezadoComponent, DetalleRecetaComponent, MsjAceptarComponent, CommonModule, FormsModule],
  templateUrl: './revisar-receta.component.html',
  styleUrl: './revisar-receta.component.scss'
})
export class RevisarRecetaComponent implements OnInit {
  mostrarMsjAceptar: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Restablece la variable cuando se carga el componente
    this.mostrarMsjAceptar = false;
  }

  aceptarReceta() {
    this.mostrarMsjAceptar = true;
    //this.router.navigate(['/buscar-receta']);
  }

  rechazarReceta() {
    this.router.navigate(['/motivo-rechazo']);
  }

  buscarOtraReceta() {
    this.router.navigate(['/buscar-receta']);
  }
}
