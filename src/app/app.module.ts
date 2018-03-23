import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import HighlightDirective from './directives/highlight.directive';
import { CountClicks } from './directives/count-cliks.directive';
import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicks,
    PlacesComponent,
    DetailComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
