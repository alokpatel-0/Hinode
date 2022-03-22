import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardscreenComponent } from './cardscreen/cardscreen.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {path: 'cartScreen' , component:CardscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
