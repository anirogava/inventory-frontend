import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './content/add/add.component';
import { ListComponent } from './content/list/list.component';
import { AuthGuardService } from './auth/service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'list', component: ListComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
