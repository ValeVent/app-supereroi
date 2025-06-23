import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { IHeroe } from '../../models/heroes.model';
import { SupereroiService } from '../../services/supereroi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-personaggi',
  templateUrl: './form-personaggi.component.html',
  styleUrl: './form-personaggi.component.css'
})
export class FormPersonaggiComponent {

  constructor(private supereroiService: SupereroiService, private router: Router) { }

  insertHeroForm: FormGroup = new FormGroup({
    id: new FormControl('',),
    nome: new FormControl('', [ Validators.required ]),
    poder: new FormArray([
      new FormControl('', [Validators.required])
    ]),
  });

  addPotere(): void {
    const newPotere = new FormControl('', [Validators.required]); 
    (this.insertHeroForm.get('poder') as FormArray).push(newPotere);
  }

  addHero(formValue: any): void {
  
    this.supereroiService.addHero(this.insertHeroForm.value).subscribe((response) => {
      this.router.navigate(['/heroes']); 
    });
  }

  removePotere(index: number): void {
    (this.insertHeroForm.get('poder') as FormArray).removeAt(index);
  }

  getPoteriControls(): FormControl[] {
    return (this.insertHeroForm.get('poder') as FormArray).controls as FormControl[];
  }
  
}
