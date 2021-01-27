import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAdminComponent } from './barra-admin.component';

describe('BarraAdminComponent', () => {
  let component: BarraAdminComponent;
  let fixture: ComponentFixture<BarraAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
