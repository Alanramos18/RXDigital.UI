import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../models/receta';
import { Router } from '@angular/router';
import { RxDigitalService } from '../services/rx-digital.service';
import { Paciente } from '../models/paciente';

@Component({
  selector: 'app-ver-recetas-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-recetas-paciente.component.html',
  styleUrls: ['./ver-recetas-paciente.component.scss']
})
export class VerRecetasPacienteComponent implements OnInit {
  searchQuery: string = '';
  recetas: Receta[];
  fechaEmision: Date = new Date('2024-06-01');
  paciente: Paciente;
  // recetas: Receta[] = [
  //   {
  //     codigo: 'RX001',//cambiar por la base de datos
  //     fechaEmision: new Date('2024-01-01'),
  //     fechaVencimiento: new Date('2024-06-01'),
  //     diagnostico: 'Hipertensión',
  //     medicamento: 'Losartan',
  //     concentracion: '50mg'
  //   },
  //   {
  //     codigo: 'RX002',
  //     fechaEmision: new Date('2024-03-15'),
  //     fechaVencimiento: new Date('2024-09-15'),
  //     diagnostico: 'Diabetes',
  //     medicamento: 'Metformina',
  //     concentracion: '500mg'
  //   }
  // ];

  constructor(private rxService: RxDigitalService, private router: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit: El componente se ha inicializado');
    this.rxService.getPrescriptions(12345678).subscribe({
      next: (res) => {
        this.recetas = res;
      },
      error: (err) => console.log('Err')
    });

    this.rxService.getPatientInfo(12345678).subscribe({
      next: (res) => {
        this.paciente = res;
      },
      error: (err) => console.log('Hubo un error. Por favor intenta mas tarde')
    });
  }

  searchRecipe() {
    // Implementar la lógica de búsqueda según searchQuery
    console.log(`Buscando receta con código: ${this.searchQuery}`);
  }

  generarReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Generar receta');
    this.router.navigate(['/emitir-receta']);
  }
}


