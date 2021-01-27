import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCajeroComponent } from './tabla-cajero.component';

describe('TablaCajeroComponent', () => {
  let component: TablaCajeroComponent;
  let fixture: ComponentFixture<TablaCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
