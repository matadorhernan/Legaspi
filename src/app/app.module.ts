import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { SalonComponent } from './salon/salon.component';
import { CateringComponent } from './catering/catering.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ComboComponent } from './combo/combo.component';
import { ContactSlideComponent } from './combo/contact-slide/contact-slide.component';
import { EventsizeSlideComponent } from './combo/eventsize-slide/eventsize-slide.component';
import { KindSlideComponent } from './combo/kind-slide/kind-slide.component';
import { BookingSlideComponent } from './combo/booking-slide/booking-slide.component';
import { StaffSlideComponent } from './combo/staff-slide/staff-slide.component';
import { ResultSlideComponent } from './combo/result-slide/result-slide.component';
import { UtilitySlideComponent } from './combo/utility-slide/utility-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChatComponent,
    SalonComponent,
    CateringComponent,
    GalleryComponent,
    ComboComponent,
    ContactSlideComponent,
    EventsizeSlideComponent,
    KindSlideComponent,
    BookingSlideComponent,
    StaffSlideComponent,
    ResultSlideComponent,
    UtilitySlideComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
