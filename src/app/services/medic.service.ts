import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { Paciente } from '../models/paciente';
import { Medico } from '../models/medico';
import { Roles } from '../models/roles.enums';
import { RxDigitalService } from './rx-digital.service';



@Injectable({
  providedIn: 'root'
})
export class MedicService {

  private role: Roles;
  private userId: string;
  private medic: Medico;
  private patient: Paciente;

  constructor(private rxService: RxDigitalService) {}

  setRole(role: number) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  setMedicData(medic: Medico) {
    this.medic = medic;
  }

  getMedicData() {
    if (this.medic == null) {
      this.rxService.getMedicInfo(this.getUserId()).subscribe({
        next: (res) => {
          this.setMedicData(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

    return this.medic;
  }

  getMedicFullName(): string {
    if (this.medic == null) {
      this.rxService.getMedicInfo(this.getUserId()).subscribe({
        next: (res) => {
          this.setMedicData(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
    
    return `${this.medic.lastName}, ${this.medic.firstName}`;  
  }

  clearMedicData() {
    this.medic = null;
  }

  setPatientData(patient: Paciente) {
    this.patient = patient;
  }

  getPatientData() {
    return this.patient;
  }

  clearPatientData() {
    this.patient = null;
  }
}
