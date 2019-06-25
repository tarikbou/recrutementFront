import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiche-candidat',
  templateUrl: './affiche-candidat.component.html',
  styleUrls: ['./affiche-candidat.component.css']
})
export class AfficheCandidatComponent implements OnInit {
  @Input() candidat: Candidat;
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  detailCandidat(){
    this._router.navigate(['/candidats',this.candidat.id]);
  }
  modifierCandidat(){
    this._router.navigate(['/modifier',this.candidat.id]);
  }
  supprimerCandidat(){

  }

}
