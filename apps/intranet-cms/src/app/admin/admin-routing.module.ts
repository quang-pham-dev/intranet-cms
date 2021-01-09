import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminParentPageComponent } from './admin-pages/admin-parent-page/admin-parent-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminParentPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
