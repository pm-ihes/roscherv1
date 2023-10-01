import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationComponent } from './application/application.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { PartnerOverviewComponent } from './partner-overview/partner-overview.component';

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "home", component: WelcomeComponent},
  {path: "kontakt", component: ContactComponent},
  {path: "bewerbung", component: ApplicationComponent},
  {path: "leistungen", component: ServiceOverviewComponent},
  {path: "partner", component: PartnerOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
