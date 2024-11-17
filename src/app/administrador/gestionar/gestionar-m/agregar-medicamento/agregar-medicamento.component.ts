import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Medicamento } from '../../../../models/medicamento';
import { RxDigitalService } from '../../../../services/rx-digital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-medicamento',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-medicamento.component.html',
  styleUrl: './agregar-medicamento.component.scss'
})
export class AgregarMedicamentoComponent {
  medicamentoForm: FormGroup;
  // ///medicamento: Medicamento;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.medicamentoForm = this.fb.group({
      commercialName: ['', Validators.required],
      presentation: ['', Validators.required],
      concentration: ['', Validators.required]
    });
  }

  onSubmit(): void {
    //   // if (this.medicamentoForm.valid) {
    //   //   this.medicamento = this.medicamentoForm.value as Medicamento;

    //     // this.rxService.createMedicine(this.medicamento).subscribe({
    //     //   next: (res) => {
    //     //     console.log(res);
    //     //   },
    //     //   error: (err) => {
    //     //     console.log(err);
    //     //   }
    //     // })
    alert('Medicamento agregado correctamente');
    this.router.navigate(['/gestionar-medicamentos']);

  }


  onCancel(): void {
    //   // this.medicamentoForm.reset();
    //   // console.log('Cancelando formulario...');
    //   ///this.location.back(); ///sale error
    alert('Agregación cancelada');
    this.router.navigate(['/gestionar-medicamentos']);
  }
}
