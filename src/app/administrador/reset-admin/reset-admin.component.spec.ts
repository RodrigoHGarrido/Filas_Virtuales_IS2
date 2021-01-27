import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAdminComponent } from './reset-admin.component';

describe('ResetAdminComponent', () => {
  let component: ResetAdminComponent;
  let fixture: ComponentFixture<ResetAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
