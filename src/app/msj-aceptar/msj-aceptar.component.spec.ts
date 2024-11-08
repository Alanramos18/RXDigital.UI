import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjAceptarComponent } from './msj-aceptar.component';

describe('MsjAceptarComponent', () => {
  let component: MsjAceptarComponent;
  let fixture: ComponentFixture<MsjAceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsjAceptarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsjAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
