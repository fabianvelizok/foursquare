import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import HighlightDirective from './directives/highlight.directive';
import { CountClicks } from './directives/count-cliks.directive';
import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { PlacesService } from './services/places.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreatePlaceComponent } from './create-place/create-place.component';

import { LinkifyStringPipe } from './pipes/linkifystring.pipe';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'create-place/new', component: CreatePlaceComponent },
  { path: 'create-place/:id', component: CreatePlaceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicks,
    PlacesComponent,
    DetailComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CreatePlaceComponent,
    LinkifyStringPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'platzisquare'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    HttpModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
