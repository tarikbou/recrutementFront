import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from './candidat.service';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent implements OnInit {
  candidat: Candidat;

  constructor(private _route: ActivatedRoute,
    private _candidatService: CandidatService) { }

  ngOnInit() {
    const id = + this._route.snapshot.paramMap.get('id'); 
    this.candidat=this._candidatService.getCandidat(id);

  }

}
