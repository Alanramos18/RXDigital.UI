import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RpStateService } from '../../../services/medic.service';
import { MsjEmergenteComponent } from '../../../msj-emergente/msj-emergente.component';
import { EmitirRecetaComponent } from '../emitir-receta/emitir-receta.component';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emision-correcta',
  standalone: true,
  imports: [MsjEmergenteComponent, EmitirRecetaComponent],
  templateUrl: './act-correcta.component.html',
  styleUrl: './act-correcta.component.scss'
})
export class ActualizacionCorrectaComponent implements OnInit, OnDestroy  {
  doctorName: string;
  subs = new Subscription;

  constructor(private router: Router, private stateService: RpStateService, public dialogRef: MatDialogRef<ActualizacionCorrectaComponent>) {
  }

  ngOnInit(): void {
    this.subs.add(this.stateService.getMedicInfo().subscribe({
      next: (medic) => {
        this.doctorName =`${medic.lastName}, ${medic.firstName}`;
      }
    }));
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  goHome() {
    this.dialogRef.close(true);
  }
}
