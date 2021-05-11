import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEvaluadoresComponent } from './lista-evaluadores.component';

describe('ListaSupervisoresComponent', () => {
  let component: ListaEvaluadoresComponent;
  let fixture: ComponentFixture<ListaEvaluadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEvaluadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEvaluadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
