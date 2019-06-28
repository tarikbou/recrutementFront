import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Candidat } from "../models/candidat.model";
import { CandidatService } from "./candidat.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-creation-candidat',
  templateUrl: './creation-candidat.component.html',
  styleUrls: ['./creation-candidat.component.css']
})
export class CreationCandidatComponent implements OnInit {
  @ViewChild('candidatForm') public creatCandidatForm: NgForm;
  candidat: Candidat;
  constructor(private _candidatService: CandidatService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(parametreMap => {
      const id = +parametreMap.get('id');
      this.getCandidat(id);
    });

  }
  saveCandidat(): void {
    const nouveauCandidat: Candidat = Object.assign({}, this.candidat);
    this._candidatService.saveCandidat(nouveauCandidat).subscribe(
      (data: Candidat) => {
        console.log(data);
        this.creatCandidatForm.reset();
        this._router.navigate(['list']);
      }
    );

  }
  getCandidat(id: number) {
    if (id === 0) {
      this.candidat = {
        id: null,
        nom: null,
        prenom: null,
        sex: null,
        numeroAdresse: null,
        rue: null,
        ville: null,
        paye: null,
      };
    }
    else {
      this._candidatService.getCandidat(id).subscribe((data: Candidat) => {
        this.candidat = data;
      });
    }
  }

}
