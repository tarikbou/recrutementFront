import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CandidatsService} from './candidats/candidats.service'


import { AppComponent } from './app.component';
import { ListCandidatsComponent } from './candidats/list-candidats.component';
import { CreationCandidatComponent } from './candidats/creation-candidat.component';

const appRoutes : Routes=[
{path:'list', component:ListCandidatsComponent},
  {path:'creation', component:CreationCandidatComponent},
  {path:'', redirectTo:'/list', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListCandidatsComponent,
    CreationCandidatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
