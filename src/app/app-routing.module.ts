import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './content/add/add.component';
import { ListComponent } from './content/list/list.component';
import { AuthGuardService } from './auth/service/auth-guard.service';
import { UsersListComponent } from './content/users-list/users-list.component';
import { MainComponent } from './content/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'users-list',
    component: UsersListComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'list', component: ListComponent, canActivate: [AuthGuardService] },
  { path: 'add', component: AddComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
