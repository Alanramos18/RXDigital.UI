import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RpStateService } from '../../services/medic.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { Roles } from '../../models/roles.enums';

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

  constructor(private stateService: RpStateService, private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    const roleId = this.tokenService.retrieve('roleId');

    switch(Number(roleId)) {
      case Roles.Admin:
        this.subs.add(this.stateService.getAdminInfo().subscribe({
          next: (admin) => {
            this.userName =`${admin?.lastName}, ${admin?.firstName}`;
          }
        }));
        break;

      case Roles.Medico:
        this.subs.add(this.stateService.getMedicInfo().subscribe({
          next: (medic) => {
            this.userName =`${medic?.lastName}, ${medic?.firstName}`;
          }
        }));
        break;

      case Roles.Farmaceutico:
        this.subs.add(this.stateService.getPharmaInfo().subscribe({
          next: (pharma) => {
            this.userName =`${pharma?.lastName}, ${pharma?.firstName}`;
          }
        }));
        break;
    }


  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
    sessionStorage.clear();
  }

}
