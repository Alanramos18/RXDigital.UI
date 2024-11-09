import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { MainState } from '../models/mainstate';
import { RxDigitalService } from './rx-digital.service';
import { TokenService } from './token.service';
import { Medico } from '../models/medico';
import { Paciente } from '../models/paciente';

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
      },
      error: (err) => console.log('Hubo un error. Por favor intenta mas tarde')
    }));
  }

  getMedicInfo() {
    if (this.medic$.getValue() === null) {
      this.initMedic();
    }

    return this.medic$;
  }

  getPatientInfo(dni: number) {
    if (this.patient$.getValue() === null || this.patient$.getValue().dni !== dni) {
      this.initPatient(dni);
    }

    return this.patient$;
  }

  clearPatient() {
    this.patient$.next(null);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
