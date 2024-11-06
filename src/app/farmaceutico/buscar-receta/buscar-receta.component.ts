import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../../encabezado/encabezado.component';

@Component({
  selector: 'app-buscar-receta',
  standalone: true,
  imports: [FormsModule, EncabezadoComponent],
  templateUrl: './buscar-receta.component.html',
  styleUrl: './buscar-receta.component.scss'
})
export class BuscarRecetaComponent {
  codigoReceta: string = '';
  constructor(private router: Router) {}

  buscarReceta(): void {
    if (this.codigoReceta.trim()) {
      console.log('Buscando receta con código:', this.codigoReceta);
      //Llamar a un servicio para obtener los datos de la receta.
      this.router.navigate(['revisar-receta']);
    } else {
      alert('Por favor, ingrese un código de receta.');
    }
  }
}
