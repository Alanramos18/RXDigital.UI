import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../../../shared/encabezado/encabezado.component";
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

  buscarMedicamento() {
    this.router.navigate(['/buscar-medicamento']);
  }
  agregarMedicamento() {
    console.log('Agregar medicamento');
    this.router.navigate(['/agregar-medicamento']);
  }

  modificarMedicamento() {
    console.log('Modificar medicamento');
  }

  eliminarMedicamento() {
    console.log('Eliminar medicamento');
  }

  

  volver() {
    console.log('Volver');
    this.router.navigate(['/inicio-gestionar']);
  }
}


