import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "kontakt", component: ContactComponent},
  {path: "bewerbung", component: ApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
