import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-medicamento',
  templateUrl: './modificar-medicamento.component.html',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, ReactiveFormsModule],
  styleUrls: ['./modificar-medicamento.component.scss']
})
export class ModificarMedicamentoComponent {
  medicamentoForm: FormGroup;
  // ///medicamento: Medicamento;
  
   constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.medicamentoForm = this.fb.group({
      nombreComercial: ['Paracetamol', Validators.required], // Valor inicial
      presentacion: ['Tabletas', Validators.required],       // Valor inicial
      concentracion: ['500 mg', Validators.required]          // Valor inicial
    });
  }

   onSubmit(): void {

    if (this.medicamentoForm.valid) {
      const updatedMedicamento = this.medicamentoForm.value;
      console.log('Medicamento actualizado:', updatedMedicamento);
      alert('Medicamento actualizado correctamente');
    }

    this.router.navigate(['/buscar-medicamento']);
    }
  

   onCancel(): void {
  //   // this.medicamentoForm.reset();
  //   // console.log('Cancelando formulario...');
  //   ///this.location.back(); ///sale error
    alert('Modificación cancelada');
    this.router.navigate(['/buscar-medicamento']);
   }
}
