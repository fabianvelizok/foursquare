// Core
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Libs
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Components
import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Env
import { environment } from '../environments/environment';

// Directives
import HighlightDirective from './directives/highlight.directive';
import { CountClicks } from './directives/count-cliks.directive';

// Services
import { PlacesService } from './services/places.service';
import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';

// Pipes
import { LinkifyStringPipe } from './pipes/linkifystring.pipe';

// Routes
const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'create-place/new', component: CreatePlaceComponent, canActivate: [
    GuardService
  ]},
  { path: 'create-place/:id', component: CreatePlaceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
    LoginComponent,
    RegisterComponent,
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
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PlacesService,
    AuthService,
    GuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
