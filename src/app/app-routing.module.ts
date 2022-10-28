import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './_pages/about-us/about-us.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { ForClientsComponent } from './_pages/for-clients/for-clients.component';
import { HomeComponent } from './_pages/home/home.component';
import { OfferComponent } from './_pages/offer/offer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'o-firmie', component: AboutUsComponent},
  {path: 'dla-klientow', component: ForClientsComponent},
  {path: 'oferta', component: OfferComponent},
  {path: 'kontakt', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
