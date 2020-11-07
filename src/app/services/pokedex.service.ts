import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pokemons } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemons> {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    return this.http.get<Pokemons>(url);
  }
}
