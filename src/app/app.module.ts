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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeistungenComponent } from './components/leistungen/leistungen.component';
import {MatDividerModule} from '@angular/material/divider';
import { PartnerOverviewComponent } from './components/unternehmen/partner-overview/partner-overview.component';
import { PartnerElementComponent } from './components/unternehmen/partner-overview/partner-element/partner-element.component';
import { HistorieComponent } from './components/unternehmen/historie/historie.component';
import { KarriereComponent } from './components/karriere/karriere.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { WelcomeTopComponent } from './components/welcome/welcome-top/welcome-top.component';
import { WelcomeLeistungenOverviewComponent } from './components/welcome/welcome-leistungen-overview/welcome-leistungen-overview.component';
import { WelcomeSliderVorteileComponent } from './components/welcome/welcome-slider-vorteile/welcome-slider-vorteile.component';
import { WelcomeCustomerStatsComponent } from './components/welcome/welcome-customer-stats/welcome-customer-stats.component';
import { LeistungItemV2Component } from './components/welcome/welcome-leistungen-overview/leistung-item-v2/leistung-item-v2.component';
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
import { KarriereStellenComponent } from './components/karriere/karriere-stellen/karriere-stellen.component';
import { KarriereStellenElementComponent } from './components/karriere/karriere-stellen/karriere-stellen-element/karriere-stellen-element.component';
import { KarriereImageComponent } from './components/karriere/karriere-image/karriere-image.component';
import { LeistungenTopComponent } from './components/leistungen/leistungen-top/leistungen-top.component';
import { LeistungenSectionsComponent } from './components/leistungen/leistungen-sections/leistungen-sections.component';
import { LeistungSectionComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-section.component';
import { LeistungEnergieComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-energie/leistung-energie.component';
import { LeistungHeizsystemeComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-heizsysteme/leistung-heizsysteme.component';
import { LeistungSanitaerComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-sanitaer/leistung-sanitaer.component';
import { LeistungKlimaComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-klima/leistung-klima.component';
import { KarriereFormularComponent } from './components/karriere/karriere-formular/karriere-formular.component';
import { LueftungZentralesSystemComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-klima/lueftung-zentrales-system/lueftung-zentrales-system.component';
import { LueftungDezentralesSystemComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-klima/lueftung-dezentrales-system/lueftung-dezentrales-system.component';
import { KlimaSystemComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-klima/klima-system/klima-system.component';
import { UnternehmenComponent } from './components/unternehmen/unternehmen.component';
import { UnternehmenTopComponent } from './components/unternehmen/unternehmen-top/unternehmen-top.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ImageSliderComponent } from './components/leistungen/leistungen-sections/leistung-section/leistung-sanitaer/image-slider/image-slider.component';
import { SanitaerSection1Component } from './components/leistungen/leistungen-sections/leistung-section/leistung-sanitaer/sanitaer-section1/sanitaer-section1.component';
import { SanitaerSection2Component } from './components/leistungen/leistungen-sections/leistung-section/leistung-sanitaer/sanitaer-section2/sanitaer-section2.component';
import { SanitaerSection3Component } from './components/leistungen/leistungen-sections/leistung-section/leistung-sanitaer/sanitaer-section3/sanitaer-section3.component';
import { Stelle1Component } from './components/karriere/karriere-stellen/stelle1/stelle1.component';
import { Stelle2Component } from './components/karriere/karriere-stellen/stelle2/stelle2.component';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    WelcomeComponent,
    KarriereFormularComponent,
    NavbarComponent,
    LeistungenComponent,
    PartnerOverviewComponent,
    PartnerElementComponent,
    HistorieComponent,
    KarriereComponent,
    LoadingIndicatorComponent,
    WelcomeTopComponent,
    WelcomeLeistungenOverviewComponent,
    WelcomeSliderVorteileComponent,
    WelcomeCustomerStatsComponent,
    LeistungItemV2Component,
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
    KarriereStellenComponent,
    KarriereStellenElementComponent,
    KarriereImageComponent,
    LeistungenTopComponent,
    LeistungenSectionsComponent,
    LeistungSectionComponent,
    LeistungEnergieComponent,
    LeistungHeizsystemeComponent,
    LeistungSanitaerComponent,
    LeistungKlimaComponent,
    KarriereFormularComponent,
    LueftungZentralesSystemComponent,
    LueftungDezentralesSystemComponent,
    KlimaSystemComponent,
    UnternehmenComponent,
    UnternehmenTopComponent,
    NotFoundComponent,
    ImageSliderComponent,
    SanitaerSection1Component,
    SanitaerSection2Component,
    SanitaerSection3Component,
    Stelle1Component,
    Stelle2Component
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
    GoogleMapsModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
