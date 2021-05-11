import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEvaluadorComponent } from './create-evaluador.component';

describe('CreateEvaluadorComponent', () => {
  let component: CreateEvaluadorComponent;
  let fixture: ComponentFixture<CreateEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
