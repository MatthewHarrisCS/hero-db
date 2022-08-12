import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'options', component: OptionsPageComponent },
  { path: 'search', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
