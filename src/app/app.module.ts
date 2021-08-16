import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './baselayout-week3/header/header.component';
import { FooterComponent } from './baselayout-week3/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './baselayout-week3/home/home.component';
import { Week3Component } from './baselayout-week3/week3/week3.component';
import { HomePageComponent } from './week4/baselayout/home-page/home-page.component';
import { MaterialModule } from './material-module';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, Week3Component, HomePageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
