import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequesInterceptor } from './core/interceptors/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
