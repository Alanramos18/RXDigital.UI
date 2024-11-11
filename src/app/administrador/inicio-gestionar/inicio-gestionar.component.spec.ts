import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioGestionarComponent } from './inicio-gestionar.component';

describe('InicioGestionarComponent', () => {
  let component: InicioGestionarComponent;
  let fixture: ComponentFixture<InicioGestionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioGestionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
