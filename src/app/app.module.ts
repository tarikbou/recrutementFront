import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CandidatService } from './candidats/candidat.service'
import { CreateCandidatCanDeactivateGuardService } from './candidats/creationCandidateCanDeactivateGuardService.service';



import { AppComponent } from './app.component';
import { ListCandidatsComponent } from './candidats/list-candidats.component';
import { CreationCandidatComponent } from './candidats/creation-candidat.component';
import { AfficheCandidatComponent } from './candidats/affiche-candidat.component';
import { CandidatDetailsComponent } from './candidats/candidat-details.component';

const appRoutes: Routes = [
  { path: 'list', component: ListCandidatsComponent },
  {
    path: 'modifier/:id',
    component: CreationCandidatComponent,
    canDeactivate: [CreateCandidatCanDeactivateGuardService]
  },
  { path: 'candidats/:id', component: CandidatDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ListCandidatsComponent,
    CreationCandidatComponent,
    AfficheCandidatComponent,
    CandidatDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CandidatService, CreateCandidatCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
