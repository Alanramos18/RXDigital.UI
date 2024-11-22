import { Component, OnDestroy, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Receta } from '../../../models/receta';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { RecetaFiltrada } from '../../../models/recetaFiltrada';
import { MatDialog } from '@angular/material/dialog';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ExportarInformeComponent } from '../exportar-informe/exportar-informe.component';

@Component({
  selector: 'app-recetas-fecha',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule,FormsModule],
  templateUrl: './recetas-fecha.component.html',
  styleUrl: './recetas-fecha.component.scss'
})
export class RecetasFechaComponent implements OnDestroy {
  constructor(private router: Router, private rxDigitalService: RxDigitalService, private location: Location, private dialog: MatDialog) {}

  subs = new Subscription;
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

  exportToPdf() {
    const doc = new jsPDF();

    const head = [['Código receta', 'Fecha emisión', 'Nombre del paciente', 'Recetado por', 'Estado de receta']];
    const body = this.recetasFiltradas.map(med => [med.codigoReceta, med.fechaEmision.toString(), med.patientName, med.medicineName, med.estado]);

    autoTable(doc, {
      head: head,
      body: body,
      margin: { top: 20 },
      theme: 'striped'
    });

    doc.save('lista-recetas.pdf');
  }

  exportar() {
    const dialogRef = this.dialog.open(ExportarInformeComponent);

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.exportToPdf();
        }
      }
    });
  }

  volver() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
