import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShubhamNJComponent } from './shubham-nj/shubham-nj.component';
import { ShuxtonComponent } from './shuxton/shuxton.component';

// Add your component here
// Please make sure that the path is the same as the link you added in the shuxton.component.ts file
const routes: Routes = [
  { path: 'shuxton', component: ShuxtonComponent },
  {path:'shubham-nj', component: ShubhamNJComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
