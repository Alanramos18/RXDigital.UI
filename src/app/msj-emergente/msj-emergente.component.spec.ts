import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEmergenteComponent } from './msj-emergente.component';

describe('MsjEmergenteComponent', () => {
  let component: MsjEmergenteComponent;
  let fixture: ComponentFixture<MsjEmergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsjEmergenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsjEmergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
