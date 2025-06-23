import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../shared/base_url';
import { Observable } from 'rxjs';
import { IHeroe } from '../models/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class SupereroiService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<IHeroe[]> {
    return this.http.get<IHeroe[]>(`${BASE_URL}`);
  }
  getHero(id: number): Observable<IHeroe> {
    return this.http.get<IHeroe>(`${BASE_URL}/${id}`);
  }
  addHero(hero: IHeroe): Observable<IHeroe> {
    return this.http.post<IHeroe>(`${BASE_URL}`, hero);
  }
}
