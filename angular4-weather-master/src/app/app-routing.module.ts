import {NgModule} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';


const appRoutes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
