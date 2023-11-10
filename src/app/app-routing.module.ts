import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';
import { BewerbungFormComponent } from './components/bewerbung-form/bewerbung-form.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import { PartnerOverviewComponent } from './components/partner-overview/partner-overview.component';
import { HistorieComponent } from './components/historie/historie.component';
import { KarriereComponent } from './components/karriere/karriere.component';
import { scrollGuard } from './services/scroll.guard';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { AgbComponent } from './components/agb/agb.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: WelcomeComponent, canActivate: [scrollGuard]},
  {path: "kontakt", component: ContactComponent, canActivate: [scrollGuard]},
  {path: "bewerbung", component: BewerbungFormComponent, canActivate: [scrollGuard]},
  {path: "leistungen", component: LeistungenComponent, canActivate: [scrollGuard]},
  {path: "partner", component: PartnerOverviewComponent, canActivate: [scrollGuard]},
  {path: "historie", component: HistorieComponent, canActivate: [scrollGuard]},
  {path: "karriere", component: KarriereComponent, canActivate: [scrollGuard]},
  {path: "loading", component: LoadingIndicatorComponent, canActivate: [scrollGuard]},
  {path: "impressum", component: ImpressumComponent, canActivate: [scrollGuard]},
  {path: "agb", component: AgbComponent, canActivate: [scrollGuard]},
  {path: "datenschutz", component: DatenschutzComponent, canActivate: [scrollGuard]},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
