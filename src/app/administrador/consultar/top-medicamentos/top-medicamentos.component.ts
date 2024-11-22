import { Component, OnDestroy } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { TopMedicina } from '../../../models/topMediciona';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MatDialog } from '@angular/material/dialog';
import { ExportarInformeComponent } from '../exportar-informe/exportar-informe.component';

@Component({
  selector: 'app-top-medicamentos',
  standalone: true,
  imports: [EncabezadoComponent, CommonModule, FormsModule],
  templateUrl: './top-medicamentos.component.html',
  styleUrl: './top-medicamentos.component.scss'
})
export class TopMedicamentosComponent implements OnDestroy {
  

  constructor(private router: Router, private rxDigitalService: RxDigitalService, private location: Location, private dialog: MatDialog) { }

  numResultados: string; // Número de resultados ingresado por el usuario
  medsList: TopMedicina[] = [];
  subs = new Subscription;
  searchError: string | null = null;

  getmedicamentosFiltrados() {
    const numericValue = Number(this.numResultados);
    if (!isNaN(numericValue)) {
      this.searchError = null;

      this.subs.add(this.rxDigitalService.getTopRx(this.numResultados).subscribe({
        next: (res) => {
          this.medsList = res;
        }
      }));
    } else {
      this.searchError = 'Por favor, ingrese un número.'
    }
  }

  exportToPdf() {
    const doc = new jsPDF();

    const head = [['Nombre comercial', 'Presentación', 'Concentración', 'Total recetados']];
    const body = this.medsList.map(med => [med.nombreComercial, med.presentacion, med.concentracion, med.totalRecetado]);

    autoTable(doc, {
      head: head,
      body: body,
      margin: { top: 20 },
      theme: 'striped'
    });

    doc.save('lista-medicamento.pdf');
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
