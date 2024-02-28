import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequesInterceptor } from './core/interceptors/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthServiceService } from './shared/services/auth-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FooterComponent,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: RequesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
