import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDetallePacienteComponent } from './ver-detalle-paciente.component';
import { PacienteService } from '../services/paciente.service';
import { of } from 'rxjs';

describe('VerDetallePacienteComponent', () => {
  let component: VerDetallePacienteComponent;
  let fixture: ComponentFixture<VerDetallePacienteComponent>;
  let pacienteServiceMock: any;

  beforeEach(async () => {
    pacienteServiceMock = {
      getPacienteById: jasmine.createSpy('getPacienteById').and.returnValue(of({ nombreCompleto: 'Juan Perez' }))
    };

    await TestBed.configureTestingModule({
      declarations: [ VerDetallePacienteComponent ],
      providers: [
        { provide: PacienteService, useValue: pacienteServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load patient details on init', () => {
    expect(component.paciente.nombreCompleto).toEqual('Juan Perez');
  });

  it('should call "volver" on button click', () => {
    spyOn(component, 'volver');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.volver).toHaveBeenCalled();
  });
});
