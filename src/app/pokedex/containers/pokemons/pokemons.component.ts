import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemons } from 'src/app/interfaces';
import { getAllPokemons } from '../../actions';
import { State } from '../../reducers/pokedex.reducer';
import { selectPokemons } from '../../selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsComponent implements OnInit {
  public pokemons$: Observable<Pokemons>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(getAllPokemons({all: true}));

    this.pokemons$ = this.store.select(selectPokemons);
  }

}
