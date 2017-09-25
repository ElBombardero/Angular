import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDerechoComponent } from './contenido-derecho.component';

describe('ContenidoDerechoComponent', () => {
  let component: ContenidoDerechoComponent;
  let fixture: ComponentFixture<ContenidoDerechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoDerechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
