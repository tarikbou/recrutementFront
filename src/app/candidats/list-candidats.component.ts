import { Component, OnInit } from '@angular/core';
import {Candidat} from "../models/candidat.model";
import {CandidatService} from "./candidat.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-list-candidats',
  templateUrl: './list-candidats.component.html',
  styleUrls: ['./list-candidats.component.css']
})
export class ListCandidatsComponent implements OnInit {
  candidats: Candidat[];

  constructor(private _candidatService :CandidatService,private _router :Router) {
  
  }

  ngOnInit() {
    this.candidats = this._candidatService.getCandidats();
  }
  onClick(candidatId: Number){
    this._router.navigate(['/candidats',candidatId]);
  }

}
