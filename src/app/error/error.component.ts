import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit, OnDestroy {
  numeroError : string = '404';
  mensajeError: string = 'Oops! Parece que no pudimos encontrar ese recurso!';
  descripError: string = 'Por favor, compruebe que la ruta sea correcta!';
  subs = new Subscription;
  error: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,  private tokenService: TokenService) {}

  ngOnInit(): void {
    this.subs.add(this.activatedRoute.params.subscribe({
      next: (params) => {
        this.error = params["id"];
        this.numeroError = this.error;
        if (this.error === '500') {
          this.mensajeError = 'Oops! Error interno del sevidor';
          this.descripError = 'Por favor inténtelo más tarde';
          this.tokenService.clean();
        } else {
          this.mensajeError = 'Oops! Parece que no pudimos encontrar ese recurso!';
          this.descripError = 'Por favor, compruebe que la ruta sea correcta!';
        }
      }
    }));
  }

  volver() {
    if (this.error === '500') {
      this.router.navigate(['/login']);
    } else {
      this.location.back();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
