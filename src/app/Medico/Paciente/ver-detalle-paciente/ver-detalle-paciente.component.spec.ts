/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDetallePacienteComponent } from './ver-detalle-paciente.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('VerDetallePacienteComponent', () => {
  let component: VerDetallePacienteComponent;
  let fixture: ComponentFixture<VerDetallePacienteComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetallePacienteComponent ],
      providers: [
        { provide: Router, useValue: routerSpy } // Mock del Router
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignorar errores de componentes hijos
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios para inicializar la vista
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar a la ruta anterior al hacer clic en Volver', () => {
    component.volver();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/ruta-a-tu-pantalla-anterior']); // Cambia por la ruta esperada
  });

  it('debería inicializar el paciente con datos', () => {
    expect(component.paciente).toBeDefined();
    expect(component.paciente.firstName).toBe('Juan'); // Ejemplo de comprobación
    expect(component.paciente.lastName).toBe('Pérez'); // Ejemplo de comprobación
  });
});*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { VerDetallePacienteComponent } from './ver-detalle-paciente.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MedicService } from '../../../services/medic.service';
import { Paciente } from '../../../models/paciente';



describe('VerDetallePacienteComponent', () => {
  let component: VerDetallePacienteComponent;
  let fixture: ComponentFixture<VerDetallePacienteComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let medicServiceSpy: jasmine.SpyObj<MedicService>;

  const mockPaciente: Paciente = {
    firstName: 'Juan',
    lastName: 'Pérez',
    patientId: 0,
    birthDay: '',
    gender: 'Masculino',
    nationality: 'Argentina',
    address: '123 Calle Falsa',
    locality: 'Buenos Aires',
    province: 'Buenos Aires',
    cellphone: '123456789',
    homePhone: '987654321',
    email: 'juan.perez@example.com',
    socialPlan: 'Plan Básico',
    socialWorkName: 'OSDE',
    socialNumber: '87654321',
    isAvailable: true,
    inscriptionDate: new Date(2020, 0, 1),
    
  };

  beforeEach(async () => {
    const medicServiceMock = jasmine.createSpyObj('MedicService', ['getPatientData']);
    medicServiceMock.getPatientData.and.returnValue(mockPaciente); // Simulación de datos del paciente

    await TestBed.configureTestingModule({
      declarations: [ VerDetallePacienteComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }, // Mock del Router
        { provide: MedicService, useValue: medicServiceMock } // Mock del servicio MedicService
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignorar errores de componentes hijos
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios para inicializar la vista
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el paciente con datos', () => {
    // Verificar que el método getPatientData fue llamado y que los datos se asignaron a `paciente`
    expect(component.paciente).toEqual(mockPaciente);
    expect(component.paciente.firstName).toBe('Juan'); // Ejemplo de comprobación
    expect(component.paciente.lastName).toBe('Pérez'); // Ejemplo de comprobación
  });

  it('debería navegar a la ruta anterior al hacer clic en Volver', () => {
    component.volver();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/ruta-a-tu-pantalla-anterior']); // Cambia esta ruta según lo necesario
  });
});
