import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInscritoComponent } from './create-inscrito.component';

describe('CreateInscritoComponent', () => {
  let component: CreateInscritoComponent;
  let fixture: ComponentFixture<CreateInscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
