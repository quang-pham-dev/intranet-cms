import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotFoundModule } from './not-found/not-found.module';
import { 
  FooterComponent,
  HeaderComponent
 } from './shared/layout';
import { HomeModule } from './home/home.module';
import { VideosModule } from './videos/videos.module';
import { ArticleModule } from './article/article.module';
import { AdminModule } from './admin/admin.module';

// Components in app
const APP_COMPONENTS = [
  FooterComponent,
  HeaderComponent,
];
// Services in app
const APP_SERVICES = [

];
// Pipes in app
const APP_PIPES = [

];
// Guards in app
const APP_GUARDS = [
  
];
// Directives in app
const APP_DIRECTIVES = [
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS,
    ...APP_PIPES,
    ...APP_DIRECTIVES
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // import module to use
    AppRoutingModule,
    HomeModule,
    VideosModule,
    ArticleModule,
    CoreModule,
    SharedModule,
    AuthModule,
    NotFoundModule,
    AdminModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
