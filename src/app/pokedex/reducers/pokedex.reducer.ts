import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store/src/models';
import { Pokemons } from 'src/app/interfaces';
import * as PokedexActions from '../actions';

export interface State {
  pokemons: Pokemons;
}

export const initialState: State = {
  pokemons: null,
};

const pokedexReducer = createReducer(
  initialState,
  on(PokedexActions.getAllPokemonsSuccess, (state, { payload }) => {
    console.log('pokedexReducer: ', state);

    return { ...state, pokemons: payload };
  })
);

export const reducer = (state: State | undefined, action: Action) => {
  console.log(state, action);

  return pokedexReducer(state, action);
};
