import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ApplicationComponent } from './application/application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import {MatDividerModule} from '@angular/material/divider';
import { PartnerOverviewComponent } from './partner-overview/partner-overview.component';
import { PartnerElementComponent } from './partner-overview/partner-element/partner-element.component';
import { ServiceElementComponent } from './service-overview/service-element/service-element.component';
import { HistorieComponent } from './historie/historie.component';
import { KarriereComponent } from './karriere/karriere.component';

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
    KarriereComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
