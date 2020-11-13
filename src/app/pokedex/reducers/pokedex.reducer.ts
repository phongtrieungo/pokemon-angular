import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store/src/models';
import { Pokemon, Pokemons } from 'src/app/interfaces';
import * as PokedexActions from '../actions';

export interface State {
  pokemons: Pokemons;
  selectedPokemon: Pokemon
}

export const initialState: State = {
  pokemons: null,
  selectedPokemon: null
};

const pokedexReducer = createReducer(
  initialState,
  on(PokedexActions.getAllPokemonsSuccess, (state, { payload }) => ({ ...state, pokemons: payload })),
  on(PokedexActions.getPokemonSuccess, (state, { payload }) => ({ ...state, selectedPokemon: payload }))
);

export const reducer = (state: State | undefined, action: Action) => pokedexReducer(state, action);
