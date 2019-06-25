import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { c } from '@angular/core/src/render3';

@Injectable()
export class CandidatService {

  private listCandidats: Candidat[] = [{
    id: 1,
    nom: 'tarik',
    prenom: 'bouhjar',
    sex: 'h'

  },
  {
    id: 2,
    nom: 'tarik',
    prenom: 'bouhjar',
    sex: 'h'

  }];

  getCandidats(): Candidat[] {
    return this.listCandidats;
  }
  getCandidat(id: Number): Candidat {
    return this.listCandidats.find(c => c.id === id);
  }
  save(candidat: Candidat): void {
    this.listCandidats.push(candidat);

  }

}