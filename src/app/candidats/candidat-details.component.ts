import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from './candidat.service';
import { Candidat } from '../models/candidat.model';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent implements OnInit {
  private _id: number;
  candidat: Candidat;

  constructor(private _route: ActivatedRoute,
    private _candidatService: CandidatService) { }

  ngOnInit() {

    this._route.paramMap.subscribe(params => {
    this._id = +params.get('id');
      this._candidatService.getCandidat(this._id).subscribe((data:Candidat)=>{
        this.candidat = data;
      });
    });


  }
  downloadCV(id:Number){
    console.log("downloadcv");
    this._candidatService.downloadCV(id).subscribe(data=>{
      FileSaver.saveAs(data,"CV_"+this.candidat.nom+"_"+this.candidat.prenom+".docx")
    });

  }

}
