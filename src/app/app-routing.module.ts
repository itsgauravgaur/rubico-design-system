import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './content-area/about-us/about-us.component';
import { HomeComponent } from './content-area/home/home.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
