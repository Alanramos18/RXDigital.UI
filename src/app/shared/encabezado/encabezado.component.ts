import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RpStateService } from '../../services/medic.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.scss'
})
export class EncabezadoComponent implements OnInit, OnDestroy {

  userName: string;
  subs = new Subscription;

  constructor(private stateService: RpStateService, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(this.stateService.getMedicInfo().subscribe({
      next: (medic) => {
        this.userName =`${medic?.lastName}, ${medic?.firstName}`;
      }
    }));
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }

}
