import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-detalle-receta',
  standalone: true,
  imports: [],
  templateUrl: './ver-detalle-receta.component.html',
  styleUrl: './ver-detalle-receta.component.scss'
})

export class VerDetalleRecetaComponent {

  constructor(private router: Router) {}

  @Input() codigoReceta: string = '1234';
  @Input() fechaEmision: string = '2024-10-25';
  @Input() fechaExpiracion: string = '2025-10-25';

  @Input() medicoNombre: string = 'Melina';
  @Input() medicoMatricula: string = '4567';

  @Input() pacienteNombre: string = 'Juan perez';
  @Input() pacienteDNI: string = '87654';
  @Input() pacienteObraSocial: string = '1233';

  @Input() medicamentoLote: string = '';
  @Input() medicamentoNombreComercial: string = '';
  @Input() medicamentoConcentracion: string = '';

  @Input() informacionDiagnostico: string = '';
  @Input() informacionIndicaciones: string = '';

  @Input() viaComunicacion: string = '';

  volver() {
    console.log("Volver a la pantalla anterior");
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
