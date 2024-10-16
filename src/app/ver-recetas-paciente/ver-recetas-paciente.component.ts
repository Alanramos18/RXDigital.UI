/*import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-recetas-paciente',
  standalone: true,
  imports: [],
  templateUrl: './ver-recetas-paciente.component.html',
  styleUrl: './ver-recetas-paciente.component.scss'
})
export class VerRecetasPacienteComponent {

}*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-recetas-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-recetas-paciente.component.html',
  styleUrls: ['./ver-recetas-paciente.component.scss']
})
export class VerRecetasPacienteComponent {
  searchQuery: string = '';
  recetas: any[] = [
    {
      codigo: 'RX001',//cambiar por la base de datos
      fechaEmision: new Date('2024-01-01'),
      fechaVencimiento: new Date('2024-06-01'),
      diagnostico: 'Hipertensión',
      medicamento: 'Losartan',
      concentracion: '50mg'
    },
    {
      codigo: 'RX002',
      fechaEmision: new Date('2024-03-15'),
      fechaVencimiento: new Date('2024-09-15'),
      diagnostico: 'Diabetes',
      medicamento: 'Metformina',
      concentracion: '500mg'
    }
  ];

  searchRecipe() {
    // Implementar la lógica de búsqueda según searchQuery
    console.log(`Buscando receta con código: ${this.searchQuery}`);
  }

  generarReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Generar receta');
  }

  paciente = {//tiene ser de la base de datos la info paciente
    dni: '12345678',
    nombreApellido: 'Melina Cruz Aro'
  };
}


