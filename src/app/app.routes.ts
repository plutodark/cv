import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ContentComponent, canActivate: [AuthGuardService] }
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });

