import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msj-aceptar',
  standalone: true,
  imports: [],
  templateUrl: './msj-aceptar.component.html',
  styleUrl: './msj-aceptar.component.scss'
})
export class MsjAceptarComponent implements OnInit {
  mensaje: string = 'Acción realizada correctamente'; // Mensaje personalizado
  redireccion: string = '/buscar-receta';  // Ruta a la que redirige después
  delay: number = 2000; // Tiempo en milisegundos antes de redirigir

  constructor(private router: Router) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate([this.redireccion]);  // Navega a la ruta especificada
    // }, this.delay);  // Espera el tiempo especificado antes de redirigir
  }
}
