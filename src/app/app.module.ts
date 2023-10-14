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
    CustomerStatsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
