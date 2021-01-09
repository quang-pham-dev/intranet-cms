import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParentPageComponent } from './admin-parent-page.component';

describe('AdminParentPageComponent', () => {
  let component: AdminParentPageComponent;
  let fixture: ComponentFixture<AdminParentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminParentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
