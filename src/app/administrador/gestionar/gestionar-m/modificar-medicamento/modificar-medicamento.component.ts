import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NuevoMedicamento } from '../../../../models/medicamento';
import { RxDigitalService } from '../../../../services/rx-digital.service';

@Component({
  selector: 'app-modificar-medicamento',
  templateUrl: './modificar-medicamento.component.html',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, ReactiveFormsModule],
  styleUrls: ['./modificar-medicamento.component.scss']
})
export class ModificarMedicamentoComponent implements OnInit, OnDestroy{
  medicamentoForm: FormGroup;
  subs = new Subscription;
  med: NuevoMedicamento;
  
  constructor(private router: Router, private fb: FormBuilder, private rxService: RxDigitalService, private location: Location) {}

  ngOnInit(): void {
    debugger;

    this.med = history.state.medicamento;

    this.medicamentoForm = this.fb.group({
      nombreComercial: [this.med.nombreComercial, Validators.required], // Valor inicial
      presentacion: [this.med.presentacion, Validators.required],       // Valor inicial
      concentracion: [this.med.concentracion, Validators.required],          // Valor inicial
      descripcion: [this.med.descripcion, Validators.required]          // Valor inicial
    });
  }

   onSubmit(): void {
    if (this.medicamentoForm.valid) {
      this.med = this.medicamentoForm.value as NuevoMedicamento;

      this.rxService.updateMedicine(this.med).subscribe({
        next: (res) => {
          alert('Medicamento agregado correctamente');
          this.router.navigate(['/gestionar-medicamentos']);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

    this.router.navigate(['/buscar-medicamento']);
    }
  
   onCancel(): void {
    this.location.back();
   }

   ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
