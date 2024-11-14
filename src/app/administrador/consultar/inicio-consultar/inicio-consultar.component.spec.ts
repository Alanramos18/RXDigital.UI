import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioConsultarComponent } from './inicio-consultar.component';

describe('ConsultarComponent', () => {
  let component: InicioConsultarComponent;
  let fixture: ComponentFixture<InicioConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioConsultarComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cerrarSesion when logout button is clicked', () => {
    spyOn(component, 'cerrarSesion');
    const button = fixture.nativeElement.querySelector('.logout-button');
    button.click();
    expect(component.cerrarSesion).toHaveBeenCalled();
  });

  it('should call volver when back button is clicked', () => {
    spyOn(component, 'volver');
    const button = fixture.nativeElement.querySelector('.back-button');
    button.click();
    expect(component.volver).toHaveBeenCalled();
  });
});
