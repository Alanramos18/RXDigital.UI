import { Component, OnDestroy, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Medicamento, NuevoMedicamento } from '../../../../models/medicamento';
import { RxDigitalService } from '../../../../services/rx-digital.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agregar-medicamento',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-medicamento.component.html',
  styleUrl: './agregar-medicamento.component.scss'
})
export class AgregarMedicamentoComponent implements OnDestroy {
  medicamentoForm: FormGroup;
  subs = new Subscription;
  nuevoMed: NuevoMedicamento;
  constructor(private router: Router, private fb: FormBuilder, private rxService: RxDigitalService, private location: Location) { }

  ngOnInit(): void {
    this.medicamentoForm = this.fb.group({
      nombreComercial: ['', Validators.required],
      presentacion: ['', Validators.required],
      concentracion: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.medicamentoForm.valid) {
      this.nuevoMed = this.medicamentoForm.value as NuevoMedicamento;

      this.rxService.createMedicine(this.nuevoMed).subscribe({
        next: (res) => {
          alert('Medicamento agregado correctamente');
          this.router.navigate(['/gestionar-medicamentos']);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  onCancel(): void {
    alert('Agregación cancelada');
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
