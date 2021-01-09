import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoManagementPageComponent } from './admin-video-management-page.component';

describe('AdminVideoManagementPageComponent', () => {
  let component: AdminVideoManagementPageComponent;
  let fixture: ComponentFixture<AdminVideoManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVideoManagementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
