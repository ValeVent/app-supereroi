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
  // Aggiungo una variabile per gestire lo stato di caricamento (ho visto che è lento quando non si apre il sito per un certo periodo di tempo)
  isLoading: boolean = true; // Inizialmente true, perché stiamo caricando

  constructor(private supereroiService: SupereroiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.isLoading = true; // Imposta isLoading a true all'inizio del caricamento
    this.supereroiService.getHeroes()
    .pipe(
      catchError((error) => {
        console.error('Error fetching heroes:', error);
        alert('Error fetching hero. Please try again later.');
        this.isLoading = false; // Imposta isLoading a false anche in caso di errore
        return of([]); // Restituisce un array vuoto in caso di errore
      })
    )
    .subscribe((data: IHeroe[]) => {
      this.heroes = data;
      console.log('Eroi ricevuti da MockAPI:', this.heroes);
      this.isLoading = false; // Imposta isLoading a false una volta che i dati sono arrivati
    });
  }
}
