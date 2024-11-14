import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EncabezadoComponent } from '../../../encabezado/encabezado.component';


@Component({
  selector: 'app-consultar',
  templateUrl: './inicio-consultar.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    EncabezadoComponent
],
  styleUrls: ['./inicio-consultar.component.scss']
})
export class InicioConsultarComponent {
  constructor(private router: Router) {}

  cerrarSesion(): void {
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
    // Redireccionar a la página de inicio de sesión si es necesario
  }

  volver(): void {
    // Navegar a la ruta anterior
    this.router.navigate(['/ruta-anterior']);
  }
}
