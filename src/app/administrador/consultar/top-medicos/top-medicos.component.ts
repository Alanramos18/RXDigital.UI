import { Component, OnDestroy } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/encabezado/encabezado.component';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TopMedico } from '../../../models/topMedico';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../../services/rx-digital.service';
import { MatDialog } from '@angular/material/dialog';
import { ExportarInformeComponent } from '../exportar-informe/exportar-informe.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-top-medicos',
  standalone: true,

  imports: [EncabezadoComponent, CommonModule, FormsModule],
  templateUrl: './top-medicos.component.html',
  styleUrl: './top-medicos.component.scss'
})
export class TopMedicosComponent implements OnDestroy {

  constructor(private router: Router, private rxDigitalService: RxDigitalService, private location: Location, private dialog: MatDialog) {}

  numResultados: string; // Número de resultados ingresado por el usuario
  medsList: TopMedico[] = [];
  subs = new Subscription;
  searchError: string | null = null;

  getmedicosFiltrados() {
    const numericValue = Number(this.numResultados);
    if (!isNaN(numericValue)) {
      this.searchError = null;

      this.subs.add(this.rxDigitalService.getTopMedics(this.numResultados).subscribe({
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

    const head = [['Número de matrícula', 'Nombre médico', 'Cantidad de recetas']];
    const body = this.medsList.map(med => [med.matricula, med.nombreMedico, med.cantidadReceta]);

    autoTable(doc, {
      head: head,
      body: body,
      margin: { top: 20 },
      theme: 'striped'
    });

    doc.save('lista-medicos.pdf');
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
