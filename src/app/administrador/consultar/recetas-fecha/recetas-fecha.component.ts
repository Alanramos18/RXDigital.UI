import { Component, OnDestroy, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receta } from '../../../models/receta';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { RecetaFiltrada } from '../../../models/recetaFiltrada';

@Component({
  selector: 'app-recetas-fecha',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule,FormsModule],
  templateUrl: './recetas-fecha.component.html',
  styleUrl: './recetas-fecha.component.scss'
})
export class RecetasFechaComponent implements OnDestroy {
  constructor(private router: Router, private rxDigitalService: RxDigitalService) {}

  subs = new Subscription;
  recetas: Receta[];
  recetasFiltradas: RecetaFiltrada[];
  from = "";
  to = "";

  filterCodes() {
    if (this.from === '' || this.to === '') {
      return;
    }

    this.subs.add(this.rxDigitalService.filterRxByDate(this.from, this.to).subscribe({
      next: (res) => {
        this.recetasFiltradas = res;
      }
    }));
  }

  exportar() {
    // Lógica para exportar la lista de médicos con más recetas
    this.router.navigate(['/exportar-informe']);
  }

  volver() {
    // Lógica para volver al panel de consulta
    // Por ejemplo, usando el router para navegar a otra ruta
    this.router.navigate(['/inicio-consultar']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
