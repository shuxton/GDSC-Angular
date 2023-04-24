import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShuxtonComponent } from './shuxton/shuxton.component';
import { ShubhamNJComponent } from './shubham-nj/shubham-nj.component';
import { VinayaknmComponent } from './vinayaknm/vinayaknm.component';
import { ShivamrutgComponent } from './shivamrutg/shivamrutg.component';
import { YukthaaComponent } from './yukthaa/yukthaa.component';
import { FathimaalzahraComponent } from './fathimaalzahra/fathimaalzahra.component';
import { SajidHusainPatilComponent } from './sajid-husain-patil/sajid-husain-patil.component';
import { KarthikeyanTComponent } from './karthikeyan-t/karthikeyan-t.component';





@NgModule({
  declarations: [
    AppComponent,
    ShuxtonComponent,
    ShubhamNJComponent,
    VinayaknmComponent,
    ShivamrutgComponent,
    YukthaaComponent,
    FathimaalzahraComponent,
    SajidHusainPatilComponent,
    KarthikeyanTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
