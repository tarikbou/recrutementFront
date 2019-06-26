import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { Router } from '@angular/router';
import { CandidatService } from './candidat.service';

@Component({
  selector: 'app-affiche-candidat',
  templateUrl: './affiche-candidat.component.html',
  styleUrls: ['./affiche-candidat.component.css']
})
export class AfficheCandidatComponent implements OnInit {
  @Input() candidat: Candidat;
  constructor(private _router:Router,private _candidatService:CandidatService ) { }

  ngOnInit() {
  }
  detailCandidat(){
    this._router.navigate(['/candidats',this.candidat.id]);
  }
  modifierCandidat(){
    this._router.navigate(['/modifier',this.candidat.id]);
  }
  supprimerCandidat(id:Number){
    this._candidatService.deleteCandidat(id).subscribe();
    this._router.navigate(['/list']);
  
  }

}
