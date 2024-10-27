import { Component } from '@angular/core';

interface Medicamento {
  nombre: string;
  marca: string;
  formaFarmaceutica: string;
  dosis: string;
  loteFabricacion: string;
  fechaCaducidad: string;
}

@Component({
  selector: 'app-modificar-medicamento',
  templateUrl: './modificar-medicamento.component.html',
  styleUrls: ['./modificar-medicamento.component.scss']
})
export class ModificarMedicamentoComponent {
  medicamento: Medicamento = {
    nombre: '',
    marca: '',
    formaFarmaceutica: '',
    dosis: '',
    loteFabricacion: '',
    fechaCaducidad: ''
  };

  agregarMedicamento() {
    console.log('Agregar medicamento');
  }

  modificarMedicamento() {
    console.log('Modificar medicamento');
  }

  eliminarMedicamento() {
    console.log('Eliminar medicamento');
  }

  guardarCambios() {
    console.log('Cambios guardados:', this.medicamento);
  }

  cancelarCambios() {
    console.log('Cambios cancelados');
    this.medicamento = {
      nombre: '',
      marca: '',
      formaFarmaceutica: '',
      dosis: '',
      loteFabricacion: '',
      fechaCaducidad: ''
    };
  }
}
