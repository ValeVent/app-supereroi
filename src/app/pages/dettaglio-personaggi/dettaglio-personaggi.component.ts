import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from '../../models/heroes.model';
import { ActivatedRoute } from '@angular/router';
import { SupereroiService } from '../../services/supereroi.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dettaglio-personaggi',
  templateUrl: './dettaglio-personaggi.component.html',
  styleUrl: './dettaglio-personaggi.component.css'
})
export class DettaglioPersonaggiComponent implements OnInit {

  id!: string;
  selectedHero: IHeroe | null = null;

  constructor(private supereroiService: SupereroiService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];  
      console.log('ID dal route:', this.id);
      if (this.id) {
        this.getHero(this.id); 
      }
    });
  }

  getHero(id: string): void {
    this.supereroiService.getHero(id)
    .pipe(
      catchError((error) => {
        console.error('Error fetching hero:', error);
        alert('Error fetching hero. Please try again later.');
        return of(null);
      })
    )
    .subscribe((data) => {
      this.selectedHero = data; 
    }
    );
  }
}
