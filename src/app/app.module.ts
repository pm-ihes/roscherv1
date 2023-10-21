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
import { ApplicationComponent } from './components/application/application.component';
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
import { ServiceOverviewV2Component } from './components/welcome/service-overview-v2/service-overview-v2.component';
import { BenefitsMainComponent } from './components/welcome/benefits-main/benefits-main.component';
import { CustomerStatsComponent } from './components/welcome/customer-stats/customer-stats.component';
import { ServiceItemV2Component } from './components/welcome/service-overview-v2/service-item-v2/service-item-v2.component';
import { PromoApplicationComponent } from './components/welcome/promo-application/promo-application.component';
import { AboutApplicationComponent } from './components/welcome/about-application/about-application.component';
import { JobOfferComponent } from './components/welcome/job-offer/job-offer.component';
import { LocationComponent } from './components/welcome/location/location.component';
import { KarriereTopComponent } from './components/karriere/karriere-top/karriere-top.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    WelcomeComponent,
    ApplicationComponent,
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
    ServiceOverviewV2Component,
    BenefitsMainComponent,
    CustomerStatsComponent,
    ServiceItemV2Component,
    PromoApplicationComponent,
    AboutApplicationComponent,
    JobOfferComponent,
    LocationComponent,
    KarriereTopComponent
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
