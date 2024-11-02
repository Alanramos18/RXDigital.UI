import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Receta } from '../models/receta';
import { Router } from '@angular/router';
import { RxDigitalService } from '../services/rx-digital.service';
import { Paciente } from '../models/paciente';
import { MedicService } from '../services/medic.service';
import { Medico } from '../models/medico';

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
  medicName: string;

  constructor(private rxService: RxDigitalService, private medicService: MedicService, private router: Router) {}

  ngOnInit(): void {
    this.paciente = this.medicService.getPatientData();
    this.medicName = this.medicService.getMedicFullName();
    
    this.rxService.getPrescriptions(this.paciente.patientId).subscribe({
      next: (res) => {
        this.recetas = res;
      },
      error: (err) => console.log('Err')
    });
  }

  verDetallePaciente(){
    console.log('Ver detalle paciente');
    this.router.navigate(['/ver-detalle-paciente']);
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

  verDetalleReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Ver detalle receta');
    //this.router.navigate(['/ver-detalle-receta']);
  }
  
  modificarReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Modificar receta');
    //this.router.navigate(['/modificar-receta']);
  }

  eliminarReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Eliminar receta');
    this.router.navigate(['/eliminar-receta']);
  }

  clonarReceta() {
    // Implementar la lógica para generar una nueva receta
    console.log('Clonar receta');
    //this.router.navigate(['/clonar-receta']);
  }

}


