import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilasActualesComponent } from './filas-actuales.component';

describe('FilasActualesComponent', () => {
  let component: FilasActualesComponent;
  let fixture: ComponentFixture<FilasActualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilasActualesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilasActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
