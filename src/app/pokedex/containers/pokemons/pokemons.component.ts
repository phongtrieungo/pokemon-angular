import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllPokemons } from '../../actions';
import { State } from '../../reducers/pokedex.reducer';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonsComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(getAllPokemons({all: true}));
  }

}
