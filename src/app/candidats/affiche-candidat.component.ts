import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-affiche-candidat',
  templateUrl: './affiche-candidat.component.html',
  styleUrls: ['./affiche-candidat.component.css']
})
export class AfficheCandidatComponent implements OnInit {
  @Input() candidat: Candidat;
  constructor() { }

  ngOnInit() {
  }

}
