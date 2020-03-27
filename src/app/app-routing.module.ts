import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [

  { path: 'frontend', component: FrontendComponent },
  { path: 'front', component: FrontComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }


