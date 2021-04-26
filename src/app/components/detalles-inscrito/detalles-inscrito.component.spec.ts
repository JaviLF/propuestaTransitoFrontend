import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesInscritoComponent } from './detalles-inscrito.component';

describe('DetallesInscritoComponent', () => {
  let component: DetallesInscritoComponent;
  let fixture: ComponentFixture<DetallesInscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesInscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesInscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
