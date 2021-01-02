import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    // import module to use
    //RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    NotFoundModule
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
