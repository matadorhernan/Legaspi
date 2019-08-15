import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalonComponent } from './salon/salon.component';
import { CateringComponent } from './catering/catering.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: SalonComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
