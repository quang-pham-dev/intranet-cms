import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleManagementPageComponent } from './admin-article-management-page.component';

describe('AdminArticleManagementPageComponent', () => {
  let component: AdminArticleManagementPageComponent;
  let fixture: ComponentFixture<AdminArticleManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArticleManagementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
