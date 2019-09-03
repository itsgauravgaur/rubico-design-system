import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { BannerComponent } from './content-area/banner/banner.component';
import { AboutUsComponent } from './content-area/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './content-area/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentAreaComponent,
    BannerComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
