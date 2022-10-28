import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { HomeComponent } from './_pages/home/home.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ForClientsComponent } from './_pages/for-clients/for-clients.component';
import { OfferComponent } from './_pages/offer/offer.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { AboutUsComponent } from './_pages/about-us/about-us.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, BannerComponent, ForClientsComponent, OfferComponent, ContactComponent, AboutUsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
