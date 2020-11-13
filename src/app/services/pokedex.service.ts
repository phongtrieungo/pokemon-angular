import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemons> {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    return this.http.get<Pokemons>(url);
  }

  getPokemon(url: string) {
    return this.http.get<Pokemon>(url);
  }

  getPokemonArtwork(url: string) {
    return this.http.get(url, { responseType: 'arraybuffer' });
  }
}
