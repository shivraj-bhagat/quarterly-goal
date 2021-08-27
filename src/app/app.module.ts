import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { NavbarComponent } from './baselayout/navbar/navbar.component';
import { SidebarComponent } from './baselayout/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [AppComponent, NavbarComponent, SidebarComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
