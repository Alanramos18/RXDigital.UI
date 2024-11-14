import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../../../encabezado/encabezado.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-medicamentos',
  templateUrl: './gestionar-medicamentos.component.html',
  standalone: true,
  imports: [EncabezadoComponent],
  styleUrls: ['./gestionar-medicamentos.component.scss'],
})
export class GestionarMedicamentosComponent {
  constructor(private router: Router) {}

  agregarMedicamento() {
    console.log('Agregar medicamento');
  }

  modificarMedicamento() {
    console.log('Modificar medicamento');
  }

  eliminarMedicamento() {
    console.log('Eliminar medicamento');
  }

  cerrarSesion() {
    console.log('Cerrar sesión');
  }

  volver() {
    console.log('Volver');
    this.router.navigate(['/inicio-gestionar']);
  }
}


