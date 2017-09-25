import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoIzquierdoComponent } from './contenido-izquierdo.component';

describe('ContenidoIzquierdoComponent', () => {
  let component: ContenidoIzquierdoComponent;
  let fixture: ComponentFixture<ContenidoIzquierdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoIzquierdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
