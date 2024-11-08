import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RpStateService } from '../services/medic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.scss'
})
export class EncabezadoComponent implements OnInit, OnDestroy {

  medicName: string;
  subs = new Subscription;

  constructor(private stateService: RpStateService) {}

  ngOnInit(): void {
    this.subs.add(this.stateService.getMedicInfo().subscribe({
      next: (medic) => {
        this.medicName =`${medic.lastName}, ${medic.firstName}`;
      }
    }));
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
