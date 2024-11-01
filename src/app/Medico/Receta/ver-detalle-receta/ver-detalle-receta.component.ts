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

  @Input() codigoReceta: string = 'MG1256';
  @Input() fechaEmision: string = '18/08/2024';
  @Input() fechaExpiracion: string = '18/11/2024';

  @Input() medicoNombre: string = 'Sofía Golé';
  @Input() medicoEspecialidad: string = 'Medicina Familiar';
  @Input() medicoMatricula: string = 'M.N.86170';

  @Input() pacienteNombre: string = 'Franco Colapinto';
  @Input() pacienteDNI: string = '42.836.125';
  @Input() pacienteObraSocial: string = '1233';

  @Input() medicamentoNombreComercial: string = 'Metformina';
  @Input() medicamentoPresentacion: string = 'Tabletas';
  @Input() medicamentoConcentracion: string = '850 mg';

  @Input() informacionDiagnostico: string = 'Diabetes Mellitus';
  @Input() informacionIndicaciones: string = 'Tomar un comprimido una vez al día con alguna comida';

  @Input() viaComunicacion: string = 'Whatsapp';

  volver() {
    console.log("Volver a la pantalla anterior");
    this.router.navigate(['/ver-recetas-paciente']);
  }
}
