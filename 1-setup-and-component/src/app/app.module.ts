import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShuxtonComponent } from './shuxton/shuxton.component';
import { ShubhamNJComponent } from './shubham-nj/shubham-nj.component';

@NgModule({
  declarations: [
    AppComponent,
    ShuxtonComponent,
    ShubhamNJComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
