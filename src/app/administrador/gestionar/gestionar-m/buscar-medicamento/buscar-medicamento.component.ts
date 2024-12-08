import { Component, OnDestroy } from '@angular/core';
import { EncabezadoComponent } from '../../../../shared/encabezado/encabezado.component';
import { Router } from '@angular/router';
import { Medicamento } from '../../../../models/medicamento';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ElimMedDialogComponent } from '../../../../shared/elimMed-dialog';
import { Subscription } from 'rxjs';
import { RxDigitalService } from '../../../../services/rx-digital.service';

@Component({
  selector: 'app-buscar-medicamento',
  standalone: true,
  imports: [EncabezadoComponent,FormsModule, CommonModule],
  templateUrl: './buscar-medicamento.component.html',
  styleUrl: './buscar-medicamento.component.scss'
})
export class BuscarMedicamentoComponent implements OnDestroy{
  subs = new Subscription;
  searchQuery: string = '';
  listaMedicamentos:Medicamento[] = [];

  constructor(private router: Router, private dialog:MatDialog, private rxDigitalService: RxDigitalService) {}
  
  
  buscar(){
    this.subs.add(this.rxDigitalService.getMedicine(this.searchQuery).subscribe({
      next: (res) => {
        this.listaMedicamentos = res;
      },
      error: (err) => console.log(err)
    })
  )
  }

  modificarMedicamento(med: Medicamento){
    this.router.navigate(['/modificar-medicamento'], { state: { medicamento: med } });
  }

  eliminarMedicamento(id: number){
    const dialogRef = this.dialog.open(ElimMedDialogComponent, {
      width: '600px',
      height:'200px'
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.subs.add(this.rxDigitalService.deleteMedicine(id).subscribe({
            next: x => {
              this.listaMedicamentos = this.listaMedicamentos.filter(med => med.medicineId !== id);
              alert('Se ha eliminado correctamente');
            },
            error: (err) => console.log(err)
          }));
        }
      }
    });
  }

  volver() {
    this.router.navigate(['/gestionar-medicamentos']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
