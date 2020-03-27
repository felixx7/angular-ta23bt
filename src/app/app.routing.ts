import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [

  { path: 'frontend', component: FrontendComponent },
  { path: 'front', component: FrontComponent }

];

export const routing = RouterModule.forRoot(routes);
