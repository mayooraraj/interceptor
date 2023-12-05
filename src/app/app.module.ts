import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';
import { ErrorInterceptor } from './error.interceptor';
//progress bar
 import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './interceptor.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     MatProgressBarModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS,
              useClass: LoggerInterceptor,
              multi: true,},
              {provide: HTTP_INTERCEPTORS,
                useClass: ErrorInterceptor,
                multi: true,},
                {provide: HTTP_INTERCEPTORS,
                  useClass: InterceptorService,
                  multi: true,},],
  bootstrap: [AppComponent]
})
export class AppModule { }
