import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon, PokemonResult } from 'src/app/interfaces';
import { PokedexService } from 'src/app/services/pokedex.service';
import { getPokemon } from '../../actions';
import { State } from '../../reducers/pokedex.reducer';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonResult: PokemonResult;

  pokemon$ = new Subject<Pokemon>();

  constructor(private _pokedexService: PokedexService, private _store: Store<State>) { }

  ngOnInit() {
    this._pokedexService.getPokemon(this.pokemonResult.url).pipe(
      map(response => this.pokemon$.next(response))
    ).subscribe();
  }

}
