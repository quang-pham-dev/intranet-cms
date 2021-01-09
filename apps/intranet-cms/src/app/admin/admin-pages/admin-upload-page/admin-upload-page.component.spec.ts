import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadPageComponent } from './admin-upload-page.component';

describe('AdminUploadPageComponent', () => {
  let component: AdminUploadPageComponent;
  let fixture: ComponentFixture<AdminUploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUploadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
