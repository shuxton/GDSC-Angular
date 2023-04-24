import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FathimaalzahraComponent } from './fathimaalzahra/fathimaalzahra.component';
import { KartikeyaComponent } from './kartikeya/kartikeya.component';
import { MeenakshiGPComponent } from './meenakshi-gp/meenakshi-gp.component';
import { SajidHusainPatilComponent } from './sajid-husain-patil/sajid-husain-patil.component';
import { ShivamrutgComponent } from './shivamrutg/shivamrutg.component';
import { ShubhamNJComponent } from './shubham-nj/shubham-nj.component';
import { ShuxtonComponent } from './shuxton/shuxton.component';
import { VinayaknmComponent } from './vinayaknm/vinayaknm.component';
import { YukthaaComponent } from './yukthaa/yukthaa.component';
import { KarthikeyanTComponent } from './karthikeyan-t/karthikeyan-t.component';

// Add your component here
// Please make sure that the path is the same as the link you added in the shuxton.component.ts file
const routes: Routes = [
  { path: 'shuxton', component: ShuxtonComponent },
  { path: 'shubham-nj', component: ShubhamNJComponent },
  { path: 'kartikeya', component: KartikeyaComponent },
  { path: 'meenakshi-gp', component: MeenakshiGPComponent },
  { path: 'vinayaknm', component: VinayaknmComponent },
  { path: 'shivamrutg', component: ShivamrutgComponent },
  {path: 'fathima-al-zahra' , component: FathimaalzahraComponent},
  { path:'yukthaa', component: YukthaaComponent},
  { path:'yukthaa', component: YukthaaComponent},
  { path:'sajid-husain-patil',component:SajidHusainPatilComponent},
  { path:'karthikeyan-t' , component: KarthikeyanTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
