import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ProgressBar } from './progressBar.component';
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ProgressBar
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2EqiPm9zI3SUWgip5zhySlq3ZEb9mbeU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
