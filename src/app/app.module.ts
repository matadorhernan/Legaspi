import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { LoadingComponent } from "./shared/loading/loading.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { HomeFoodCardComponent } from "./pages/home/home-food-card/home-food-card.component";
import { BrandComponent } from "./shared/brand/brand.component";
import { CateringComponent } from "./pages/catering/catering.component";
import { VenuesComponent } from "./pages/venues/venues.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { VenuesVenueCardComponent } from "./pages/venues/venues-venue-card/venues-venue-card.component";
import { AutoQuoteComponent } from "./modals/auto-quote/auto-quote.component";
import { AutoQuoteSaComponent } from "./modals/auto-quote/auto-quote-sa/auto-quote-sa.component";
import { AutoQuoteSbComponent } from "./modals/auto-quote/auto-quote-sb/auto-quote-sb.component";
import { ItemToggleComponent } from "./modals/auto-quote/item-toggle/item-toggle.component";
import { AutoQuoteScComponent } from "./modals/auto-quote/auto-quote-sc/auto-quote-sc.component";
import { AutoQuoteSdComponent } from "./modals/auto-quote/auto-quote-sd/auto-quote-sd.component";
import { AutoQuoteFinalComponent } from "./modals/auto-quote/auto-quote-final/auto-quote-final.component";
import { AutoQuoteSeComponent } from './modals/auto-quote/auto-quote-se/auto-quote-se.component';
import { AutoQuoteSfComponent } from './modals/auto-quote/auto-quote-sf/auto-quote-sf.component';
import { AutoQuoteSgComponent } from './modals/auto-quote/auto-quote-sg/auto-quote-sg.component';
import { AutoQuoteShComponent } from './modals/auto-quote/auto-quote-sh/auto-quote-sh.component';
import { AutoQuoteSiComponent } from './modals/auto-quote/auto-quote-si/auto-quote-si.component';
import { AutoQuoteSjComponent } from './modals/auto-quote/auto-quote-sj/auto-quote-sj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    FooterComponent,
    HomeComponent,
    HomeFoodCardComponent,
    BrandComponent,
    CateringComponent,
    VenuesComponent,
    GalleryComponent,
    ContactComponent,
    VenuesVenueCardComponent,
    AutoQuoteComponent,
    AutoQuoteSaComponent,
    AutoQuoteSbComponent,
    ItemToggleComponent,
    AutoQuoteScComponent,
    AutoQuoteSdComponent,
    AutoQuoteFinalComponent,
    AutoQuoteSeComponent,
    AutoQuoteSfComponent,
    AutoQuoteSgComponent,
    AutoQuoteShComponent,
    AutoQuoteSiComponent,
    AutoQuoteSjComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
