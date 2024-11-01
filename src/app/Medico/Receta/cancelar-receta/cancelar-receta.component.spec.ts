import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarRecetaComponent } from './cancelar-receta.component';

describe('CancelarRecetaComponent', () => {
  let component: CancelarRecetaComponent;
  let fixture: ComponentFixture<CancelarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelarRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
