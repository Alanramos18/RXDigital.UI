import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';

@Component({
  selector: 'app-top-medicos',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './top-medicos.component.html',
  styleUrl: './top-medicos.component.scss'
})
export class TopMedicosComponent {

}
