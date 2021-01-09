import { NgModule } from '@angular/core';
import { 
  Routes,
  RouterModule
 } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomeModule'
  // },
  // {
  //   path: 'videos',
  //   loadChildren: './videos/videos.module#VideosModule'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule'
  // },
  // {
  //   path: 'article',
  //   loadChildren: './article/article.module#ArticleModule'
  // }
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'videos',
        loadChildren: './videos/videos.module#VideosModule'
      },
      {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: '**',
        loadChildren: './not-found/not-found.module#NotFoundModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
