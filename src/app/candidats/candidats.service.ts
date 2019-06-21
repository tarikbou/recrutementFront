import {Candidat} from '../models/candidat.model';
import { Injectable } from '@angular/core';

@Injectable
export CandidatsService {

   private  listCandidats: Candidat[]=[{
    nom: 'bouhjar',
  prenom: 'tarik',
  sex:"homme",
  numeroAdresse:15,
rue:"narboob",
ville:"toulouse",
paye:"france",
}];

getCandidats(): Candidat[]{
    return this.listCandidats;
}
}