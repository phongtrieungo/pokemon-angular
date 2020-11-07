import { createAction, props } from '@ngrx/store';
import { Pokemons } from 'src/app/interfaces';

export const GET_ALL_POKEMONS = '[Pokedex Page] Get all pokemons';
export const GET_ALL_POKEMONS_SUCCESS = '[Pokedex Page] Pokemons Loaded Success';

export const getAllPokemons = createAction(
  GET_ALL_POKEMONS,
  props<{ all: boolean }>()
);

export const getAllPokemonsSuccess = createAction(
  GET_ALL_POKEMONS_SUCCESS,
  props<{ payload: Pokemons }>()
);
