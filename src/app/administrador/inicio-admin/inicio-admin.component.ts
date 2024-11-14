import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../encabezado/encabezado.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-admin',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './inicio-admin.component.html',
  styleUrl: './inicio-admin.component.scss'
})
export class InicioAdminComponent {

  constructor(private router: Router) {}
gestionar(){
  this.router.navigate(['/inicio-gestionar']);
}

consultar(){
  this.router.navigate(['/inicio-consultar']);
}

}
