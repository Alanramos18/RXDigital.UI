import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';

@Component({
  selector: 'app-top-medicamentos',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './top-medicamentos.component.html',
  styleUrl: './top-medicamentos.component.scss'
})
export class TopMedicamentosComponent {

}
