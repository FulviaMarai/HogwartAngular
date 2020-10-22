import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [

{
path:"", component: HomeComponent,
},{
path:"houses", component: HousesComponent,
},{
path:"griff", component: GryffindorComponent,
},{
path:"huffl", component: HufflepuffComponent,
},{
path:"raven", component: RavenclawComponent,
},{
path:"slyth", component: SlytherinComponent,
},{
path:"subjects", component: SubjectsComponent,
},
{
path:"prof", component: ProfessorsComponent,
},{
path: "prof-details/:crewId", component: ProfDetailsComponent,
},{
path:"hat", component: SortingHatComponent ,
},{
path:"letter", component: LetterComponent ,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
