import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminParentPageComponent } from './admin-pages/admin-parent-page/admin-parent-page.component';
import { AdminUploadPageComponent } from './admin-pages/admin-upload-page/admin-upload-page.component';
import { AdminVideoManagementPageComponent } from './admin-pages/admin-video-management-page/admin-video-management-page.component';
import { AdminArticleManagementPageComponent } from './admin-pages/admin-article-management-page/admin-article-management-page.component';



@NgModule({
  declarations: [
    AdminParentPageComponent, 
    AdminUploadPageComponent, 
    AdminVideoManagementPageComponent, 
    AdminArticleManagementPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
