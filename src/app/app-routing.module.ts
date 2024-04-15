import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
const routes: Routes = [
  { path: '', component: HomeComponent ,pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'others', component: OthersComponent },
  { path: 'contact', component:  ContactComponent },
  { path: 'CapitalAtoZ', component:  CapitalAtoZComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegistrationComponent},
  { path: 'course', component:  CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
