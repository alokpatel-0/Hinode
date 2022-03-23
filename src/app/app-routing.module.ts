import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardscreenComponent } from './cardscreen/cardscreen.component';
import { CardComponent } from './card/card.component';
import { LandingComponent } from './core/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  { path: 'cartScreen', component: CardscreenComponent },
  {
    path: 'shop',
    component: LandingComponent,
  },
  { path: 'card', component: CardComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
