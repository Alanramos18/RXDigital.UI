import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxDigitalService } from '../services/rx-digital.service';
import { Router } from '@angular/router';
import { Roles } from '../models/roles.enums';
import { jwtDecode } from 'jwt-decode';
import { RpStateService } from '../services/medic.service';
import { TokenService } from '../services/token.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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

      switch(Number(decodedToken['RoleId'])) {
        case Roles.Admin:
          this.router.navigate(['/asdasdasdas']);
          break;

        case Roles.Medico:
          this.router.navigate(['/buscar-paciente']);
          break;

        case Roles.Farmaceutico:
          this.router.navigate(['/buscar-receta']);
          break;
      }
    } catch (error) {
      this.errorMessage = 'Email o Contraseña incorrecta. Pruebe de nuevo.';
    }

    // this.rxService.login(this.email, this.password).subscribe({
    //   next: (res) => {
    //     localStorage.setItem('token', res);

    //     const decodedToken: any = jwtDecode(res);

    //     this.medicService.setRole(decodedToken['RoleId']);
    //     this.medicService.setUserId(decodedToken['UserId']);

    //     this.rxService.getMedicInfo(decodedToken['UserId']).subscribe({
    //       next: (res) => {
    //         this.medicService.setMedicData(res);
    //       },
    //       error: (err) => {
    //         console.log(err);
    //       }
    //     });

    //     switch(Number(this.medicService.getRole())) {
    //       case Roles.Admin:
    //         this.router.navigate(['/asdasdasdas']);
    //         break;

    //       case Roles.Medico:
    //         this.router.navigate(['/buscar-paciente']);
    //         break;

    //       case Roles.Farmaceutico:
    //         this.router.navigate(['/asdadasd']);
    //         break;
    //     }
    //   },
    //   error: (err) => {
    //     console.log('Hubo un error. Por favor intenta mas tarde')
    //   }
    // });
  }

  register(){
    this.router.navigate(['/registrate']);
  }

  recuperarCuenta(){
    this.router.navigate(['/buscar-paciente']);
  } 
}
