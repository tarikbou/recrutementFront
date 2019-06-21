import { Component, OnInit } from '@angular/core';
import {Candidat} from "../models/candidat.model";

@Component({
  selector: 'app-list-candidats',
  templateUrl: './list-candidats.component.html',
  styleUrls: ['./list-candidats.component.css']
})
export class ListCandidatsComponent implements OnInit {
  candidats: Candidat[];

  constructor() {}

  ngOnInit() {
  }

}
