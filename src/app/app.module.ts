import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BewerbungFormComponent } from './components/bewerbung-form/bewerbung-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceOverviewComponent } from './components/service-overview/service-overview.component';
import {MatDividerModule} from '@angular/material/divider';
import { PartnerOverviewComponent } from './components/partner-overview/partner-overview.component';
import { PartnerElementComponent } from './components/partner-overview/partner-element/partner-element.component';
import { ServiceElementComponent } from './components/service-overview/service-element/service-element.component';
import { HistorieComponent } from './components/historie/historie.component';
import { KarriereComponent } from './components/karriere/karriere.component';
import { HistoryElementComponent } from './components/historie/history-element/history-element.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { WelcomeTopComponent } from './components/welcome/welcome-top/welcome-top.component';
import { WelcomeServiceOverviewComponent } from './components/welcome/welcome-service-overview/welcome-service-overview.component';
import { WelcomeBenefitsMainComponent } from './components/welcome/welcome-benefits-main/welcome-benefits-main.component';
import { WelcomeCustomerStatsComponent } from './components/welcome/welcome-customer-stats/welcome-customer-stats.component';
import { ServiceItemV2Component } from './components/welcome/welcome-service-overview/service-item-v2/service-item-v2.component';
import { WelcomePromoApplicationComponent } from './components/welcome/welcome-promo-application/welcome-promo-application.component';
import { WelcomeAboutApplicationComponent } from './components/welcome/welcome-about-application/welcome-about-application.component';
import { WelcomeJobOfferComponent } from './components/welcome/welcome-job-offer/welcome-job-offer.component';
import { WelcomeLocationComponent } from './components/welcome/welcome-location/welcome-location.component';
import { KarriereTopComponent } from './components/karriere/karriere-top/karriere-top.component';
import { KarriereAboutComponent } from './components/karriere/karriere-about/karriere-about.component';
import { KarriereErwartetComponent } from './components/karriere/karriere-erwartet/karriere-erwartet.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { AgbComponent } from './components/agb/agb.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { KarriereWachsenComponent } from './components/karriere/karriere-wachsen/karriere-wachsen.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    WelcomeComponent,
    BewerbungFormComponent,
    NavbarComponent,
    ServiceOverviewComponent,
    PartnerOverviewComponent,
    PartnerElementComponent,
    ServiceElementComponent,
    HistorieComponent,
    KarriereComponent,
    HistoryElementComponent,
    LoadingIndicatorComponent,
    WelcomeTopComponent,
    WelcomeServiceOverviewComponent,
    WelcomeBenefitsMainComponent,
    WelcomeCustomerStatsComponent,
    ServiceItemV2Component,
    WelcomePromoApplicationComponent,
    WelcomeAboutApplicationComponent,
    WelcomeJobOfferComponent,
    WelcomeLocationComponent,
    KarriereTopComponent,
    KarriereAboutComponent,
    KarriereErwartetComponent,
    ImpressumComponent,
    AgbComponent,
    DatenschutzComponent,
    KarriereWachsenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxParallaxModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
