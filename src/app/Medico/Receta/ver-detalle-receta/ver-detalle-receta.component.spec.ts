import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleRecetaComponent } from './ver-detalle-receta.component';

describe('VerDetalleRecetaComponent', () => {
  let component: VerDetalleRecetaComponent;
  let fixture: ComponentFixture<VerDetalleRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerDetalleRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerDetalleRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
