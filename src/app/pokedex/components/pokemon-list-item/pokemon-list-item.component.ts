import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResult, Pokemons } from 'src/app/interfaces';
import { getPokemon } from '../../actions';
import { State } from '../../reducers/pokedex.reducer';
import { selectPokemon } from '../../selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemons: Pokemons;

  pokemon$: Observable<Pokemon>;

  constructor(private _store: Store<State>) { }

  ngOnInit() {
    this.pokemon$ = this._store.select(selectPokemon);
  }

  view(pokemon: PokemonResult) {
    this._store.dispatch(getPokemon({url: pokemon.url}))
  }

}
