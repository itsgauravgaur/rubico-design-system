import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './content-area/about-us/about-us.component';
import { HomeComponent } from './content-area/home/home.component';
import { ComponentMainComponent } from './components/component-main/component-main.component';
import { BannerComponent } from './content-area/banner/banner.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'component', component: ComponentMainComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
