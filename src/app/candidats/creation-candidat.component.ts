import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creation-candidat',
  templateUrl: './creation-candidat.component.html',
  styleUrls: ['./creation-candidat.component.css']
})
export class CreationCandidatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveCandidat(candidatForm : NgForm): void{
    console.log(candidatForm.value);

  }

}
