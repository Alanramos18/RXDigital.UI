import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxDigitalService } from '../services/rx-digital.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Roles } from '../models/roles.enums';
import { jwtDecode } from 'jwt-decode';
import { RpStateService } from '../services/medic.service';
import { TokenService } from '../services/token.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  errorMessage: string;

  constructor(private rxService: RxDigitalService,
    private router: Router,
    private tokenService: TokenService) {}

  async login(): Promise<void> {
    try {
      this.tokenService.clean();
      const accessToken = await lastValueFrom(this.rxService.login(this.email, this.password));
      const decodedToken: any = this.tokenService.getDataFromToken(accessToken);

      this.tokenService.store('token', accessToken);
      this.tokenService.setExpiration(accessToken);
      this.tokenService.store('userId', decodedToken['UserId']);
      this.tokenService.store('roleId', decodedToken['RoleId']);

      switch(Number(decodedToken['RoleId'])) {
        case Roles.Admin:
          this.router.navigate(['/inicio-admin']);
          break;

        case Roles.Medico:
          this.router.navigate(['/buscar-paciente']);
          break;

        case Roles.Farmaceutico:
          this.router.navigate(['/buscar-receta']);
          break;
      }
    } catch (error) {
      if(error.status === 0) {
        this.router.navigate(['/error/500']);
      } else {
        this.errorMessage = error.error;
      }
    }
  }

  register(){
    this.router.navigate(['/registrate']);
  }

  recuperarCuenta(){
    this.router.navigate(['/buscar-paciente']);
  } 
}
