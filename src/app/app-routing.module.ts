import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CateringComponent } from "./pages/catering/catering.component";
import { VenuesComponent } from "./pages/venues/venues.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "banqueteria", component: CateringComponent },
  { path: "salones", component: VenuesComponent },
  { path: "galeria", component: GalleryComponent },
  { path: "contacto", component: ContactComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
