import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ProgressBar } from './progressBar.component';
import { AgmCoreModule } from '@agm/core';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts';
import localeFr from '@angular/common/locales/fr';


const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  { path: 'stats', component: StatsComponent},
  { path: '**',redirectTo: '/home'}
]
@NgModule({
  declarations: [
    AppComponent,
    ProgressBar,
    ListComponent,
    MapComponent,
    StatsComponent
    
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2EqiPm9zI3SUWgip5zhySlq3ZEb9mbeU'
    }),
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
