import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { GryffindorComponent } from './gryffindor/gryffindor.component';
import { HufflepuffComponent } from './hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './slytherin/slytherin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ProfessorsComponent } from './professors/professors.component';
import { SortingHatComponent } from './sorting-hat/sorting-hat.component';
import { LetterComponent } from './letter/letter.component';
import { ProfDetailsComponent } from './prof-details/prof-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HousesComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    SlytherinComponent,
    SubjectsComponent,
    ProfessorsComponent,
    SortingHatComponent,
    LetterComponent,
    ProfDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
