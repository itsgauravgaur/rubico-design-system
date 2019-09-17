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
import { ComponentMainComponent } from './components/component-main/component-main.component';


import { HighlightModule } from 'ngx-highlightjs';

import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';


/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss}
  ];
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentAreaComponent,
    BannerComponent,
    AboutUsComponent,
    HomeComponent,
    ComponentMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
