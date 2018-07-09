import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewReimbursementsComponent } from './manager-view-reimbursements.component';

describe('ManagerViewReimbursementsComponent', () => {
  let component: ManagerViewReimbursementsComponent;
  let fixture: ComponentFixture<ManagerViewReimbursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerViewReimbursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
