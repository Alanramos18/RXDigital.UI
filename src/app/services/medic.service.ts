import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, catchError, of, switchMap, take, tap, throwError } from 'rxjs';

import { MainState } from '../models/mainstate';
import { RxDigitalService } from './rx-digital.service';
import { TokenService } from './token.service';
import { Medico } from '../models/medico';
import { Paciente } from '../models/paciente';
import { Roles } from '../models/roles.enums';

const initialState: MainState = {
  role: null,
  userId: null,
  medic: null,
  patient: null
}

@Injectable({
  providedIn: 'root'
})
export class RpStateService implements OnDestroy {

  private subs = new Subscription();
  private medic$ = new BehaviorSubject<Medico>(null);
  private patient$ = new BehaviorSubject<Paciente>(null);
  private role: Roles = null;

  constructor(private rxService: RxDigitalService, private tokenService: TokenService) {
  }

  // resetState() {
  //   this.setState(initialState);
  // }

  // getStateData = () => this.select(state => state);
  // getMedicData = () => this.select(state => state.medic);
  // getPatientData = () => this.select(state => state.patient);

  initMedic() {
    const userId: any = this.tokenService.retrieve('userId');
    this.subs.add(this.rxService.getMedicInfo(userId).subscribe({
      next: (res) => {
        this.medic$.next(res);
        this.role = Roles.Medico;
      },
      error: (err) => {
        console.log(err);
      }
    }));
  }

  initPatient(dni: number) {
    this.subs.add(this.rxService.getPatientInfo(dni).subscribe({
      next: (res) => {
        this.patient$.next(res);
      }
    }));
  }

  getMedicInfo() {
    if (this.medic$.getValue() === null) {
      this.initMedic();
    }
    return this.medic$;
  }

  clearMedic() {
    this.medic$.next(null);
  }

  // getPatientInfo(dni: number) {
  //   if (this.patient$.getValue() === null || this.patient$.getValue().dni !== dni) {
  //     this.initPatient(dni);
  //   }

  //   return this.patient$;
  // }

  getPatientInfo(dni: number) {
    return this.patient$.pipe(
      take(1),
      switchMap((patient) => {
        if (patient && patient.dni === dni) {
          return of(patient);
        } else {
          return this.rxService.getPatientInfo(dni).pipe(
            tap((res) => this.patient$.next(res)),
            catchError((err) => {
              this.patient$.next(null);
              return throwError(() => err);
            })
          );
        }
      })
    );
  }

  clearPatient() {
    this.patient$.next(null);
  }

  getUserName() {
    const roleId: any = this.tokenService.retrieve('roleId');
    let userName = "";
    switch(roleId) {
      case Roles.Medico:
        this.getMedicInfo().subscribe({
          next: (medic) => {
            userName = `${medic.lastName}, ${medic.firstName}`;
          }
        });
        break;

      case Roles.Farmaceutico:
        this.getMedicInfo().subscribe({
          next: (medic) => {
            userName = `${medic.lastName}, ${medic.firstName}`;
          }
        });
        break;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
