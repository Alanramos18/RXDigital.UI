import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { Paciente } from '../models/paciente';
import { Medico } from '../models/medico';
import { Medicamento } from '../models/medicamento';
import { RecetaNueva } from '../models/receta-nueva';

@Injectable({
  providedIn: 'root'
})
export class RxDigitalService {

  private apiUrl = 'https://localhost:44375';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${ this.apiUrl }/login`;
    const body = { email, password };

    return this.http.post(url, body);
  }

  getPatientInfo(patientId: number): Observable<Paciente> {
    const url = `${this.apiUrl}/patient/basicInfo/${patientId}`;

    return this.http.get<Paciente>(url);
  }

  getPrescriptions(patientId: number): Observable<Receta[]> {
    const url = `${this.apiUrl}/patient/prescriptions/${patientId}`;

    return this.http.get<Receta[]>(url);
  }

  getMedicInfo(userId: string): Observable<Medico> {
    const url = `${this.apiUrl}/doctor/getByUserId/${userId}`;

    return this.http.get<Medico>(url);
  }

  getMedicine(medicineName: string): Observable<Medicamento[]> {
    const url = `${this.apiUrl}/doctor/searchMedicines?medicineName=${medicineName}`;

    return this.http.get<Medicamento[]>(url);
  } 

  emitPrescription(body: RecetaNueva): Observable<number> {
    const url = `${this.apiUrl}/doctor/create-prescription`;

    return this.http.post<number>(url, body);
  } 
}
