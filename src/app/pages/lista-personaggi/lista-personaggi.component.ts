import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../models/heroes.model';
import { SupereroiService } from '../../services/supereroi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-lista-personaggi',
  templateUrl: './lista-personaggi.component.html',
  styleUrl: './lista-personaggi.component.css'
})
export class ListaPersonaggiComponent implements OnInit {

  heroes: IHeroe[] = [];
  selectedHero: IHeroe | null = null;

  constructor(private supereroiService: SupereroiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.supereroiService.getHeroes()
    .pipe(
      catchError((error) => {
        console.error('Error fetching heroes:', error);
        alert('Error fetching heroes. Please try again later.');
        return of([]); // Return an empty array in case of error
      })
    )
    .subscribe((data: IHeroe[]) => {
      this.heroes = data;
    });
  }
}
