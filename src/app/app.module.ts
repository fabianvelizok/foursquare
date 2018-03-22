import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';

import HighlightDirective from './directives/highlight.directive';
import { CountClicks } from './directives/count-cliks.directive';
import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicks,
    PlacesComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
