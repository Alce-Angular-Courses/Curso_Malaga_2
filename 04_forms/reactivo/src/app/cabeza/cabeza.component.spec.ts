import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaComponent } from './cabeza.component';

describe('CabezaComponent', () => {
  let component: CabezaComponent;
  let fixture: ComponentFixture<CabezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
