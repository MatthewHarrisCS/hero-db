import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'options', component: OptionsPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'privacy', component: PrivacyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
