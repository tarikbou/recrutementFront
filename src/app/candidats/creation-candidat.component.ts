import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidat } from "../models/candidat.model";
import { CandidatService } from "./candidat.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-creation-candidat',
  templateUrl: './creation-candidat.component.html',
  styleUrls: ['./creation-candidat.component.css']
})
export class CreationCandidatComponent implements OnInit {
  @ViewChild('candidatForm') public creatCandidatForm: NgForm;
  candidat: Candidat = {
    nom: null,
    prenom: null,
    sex: null,
    numeroAdresse: null,
    rue: null,
    ville: null,
    paye: null
  };
  constructor(private _candidatService: CandidatService, private _router: Router) { }

  ngOnInit() {

  }
  saveCandidat(): void {
    this._candidatService.save(this.candidat);
    this._router.navigate(['list']);
  }

}
