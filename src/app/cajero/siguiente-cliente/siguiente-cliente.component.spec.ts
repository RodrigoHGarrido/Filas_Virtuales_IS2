import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiguienteClienteComponent } from './siguiente-cliente.component';

describe('SiguienteClienteComponent', () => {
  let component: SiguienteClienteComponent;
  let fixture: ComponentFixture<SiguienteClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiguienteClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiguienteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
