import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreationCandidatComponent } from './creation-candidat.component'; 
7
@Injectable()
export class CreateCandidatCanDeactivateGuardService implements CanDeactivate<CreationCandidatComponent>{

    canDeactivate(component: CreationCandidatComponent): boolean {
        if (component.creatCandidatForm.dirty) {
            return confirm("voulez vous quitez le formulaire ?");
        }
        return true;
    }

}