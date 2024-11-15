import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { RpStateService } from '../../../services/medic.service';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { Subscription } from 'rxjs';
import { Medico } from '../../../models/medico';

@Component({
  selector: 'app-buscar-paciente',
  standalone: true,
  imports: [FormsModule, EncabezadoComponent],
  templateUrl: './buscar-paciente.component.html',
  styleUrl: './buscar-paciente.component.scss'
})
export class BuscarPacienteComponent implements OnInit, OnDestroy {
  dniPaciente: number;
  nombreUsuario: string = 'Nombre del médico'; // Esto sería dinámico.
  subs = new Subscription;
  medic: Medico;
  medicName: string;

  constructor(private stateService: RpStateService, private router: Router) {}

  ngOnInit(): void {
    this.stateService.clearPatient();
    
    this.subs.add(this.stateService.getMedicInfo().subscribe({
      next: (medic) => {
        this.medic = medic;
        this.medicName =`${medic.lastName}, ${medic.firstName}`;
      }
    }));
  }

  buscarPaciente() {
    this.subs.add(this.stateService.getPatientInfo(this.dniPaciente).subscribe({
      next: (res) => {
        if(res.dni > 0)
        {
          this.router.navigate(['ver-recetas-paciente/' + res.dni]);
        }
      },
      error: (err) => console.log('Hubo un error. Por favor intenta mas tarde')
    }));
  }

  agregarPaciente() {
    this.router.navigate(['agregar-paciente']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}


