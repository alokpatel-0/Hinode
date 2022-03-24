import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardscreenComponent } from './cardscreen/cardscreen.component';
import { CardComponent } from './card/card.component';
import { AddressFormComponent } from './core/address-form/address-form.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
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
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'address',
    component: AddressFormComponent,
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
