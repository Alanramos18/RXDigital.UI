import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../../../encabezado/encabezado.component";


@Component({
  selector: 'app-gestionar-medicamentos',
  templateUrl: './gestionar-medicamentos.component.html',
  standalone: true,
  imports: [EncabezadoComponent],
  styleUrls: ['./gestionar-medicamentos.component.scss'],
})
export class GestionarMedicamentosComponent {
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
  }
}


