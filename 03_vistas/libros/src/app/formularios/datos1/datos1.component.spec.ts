import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datos1Component } from './datos1.component';

describe('Datos1Component', () => {
  let component: Datos1Component;
  let fixture: ComponentFixture<Datos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
