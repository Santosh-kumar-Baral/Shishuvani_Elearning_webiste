import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { OthersComponent } from './others/others.component';
import { ServiceComponent } from './service/service.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { CapitalAtoZComponent } from './capital-ato-z/capital-ato-z.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    TeamComponent,
    HomeComponent,
    OthersComponent,
    ServiceComponent,
    CourseComponent,
    ContactComponent,
    CapitalAtoZComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
