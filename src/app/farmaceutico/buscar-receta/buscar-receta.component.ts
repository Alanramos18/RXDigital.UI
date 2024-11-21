import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EncabezadoComponent } from '../../shared/encabezado/encabezado.component';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../services/rx-digital.service';

@Component({
  selector: 'app-buscar-receta',
  standalone: true,
  imports: [FormsModule, EncabezadoComponent, CommonModule],
  templateUrl: './buscar-receta.component.html',
  styleUrl: './buscar-receta.component.scss'
})
export class BuscarRecetaComponent implements OnDestroy {
  codigoReceta: string = '';
  subs = new Subscription;
  searchError: string | null = null;

  constructor(private rxService: RxDigitalService, private router: Router) {}

  buscarReceta(): void {
    if (this.codigoReceta.trim()) {
      console.log('Buscando receta con código:', this.codigoReceta);
      this.subs.add(this.rxService.getRx(this.codigoReceta).subscribe({
        next: (info) => {
          console.log(info);
          this.router.navigate(['revisar-receta/' + this.codigoReceta.toLocaleUpperCase()]);
        },
        error: (err) => {
          this.searchError = 'No se encontraron resultados para la búsqueda.';
        }
      }));
      //Llamar a un servicio para obtener los datos de la receta.
    } else {
      this.searchError = 'Por favor, ingrese un código de receta.';
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
