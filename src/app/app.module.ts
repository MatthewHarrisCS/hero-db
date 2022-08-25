import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavService } from './nav.service';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    SearchPageComponent,
    OptionsPageComponent,
    TopNavComponent,
    PrivacyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
