import { createAction, props } from '@ngrx/store';
import { Pokemon, Pokemons } from 'src/app/interfaces';

export const GET_ALL_POKEMONS = '[Pokedex Page] Get all pokemons';
export const GET_ALL_POKEMONS_SUCCESS = '[Pokedex Page] Pokemons Loaded Success';

export const GET_POKEMON = '[Pokedex Page] Get pokemon';
export const GET_POKEMON_SUCCESS = '[Pokedex Page] Get pokemon success';

export const getAllPokemons = createAction(
  GET_ALL_POKEMONS,
  props<{ all: boolean }>()
);

export const getAllPokemonsSuccess = createAction(
  GET_ALL_POKEMONS_SUCCESS,
  props<{ payload: Pokemons }>()
);

export const getPokemon = createAction(
  GET_POKEMON,
  props<{ url: string }>()
);

export const getPokemonSuccess = createAction(
  GET_POKEMON_SUCCESS,
  props<{ payload: Pokemon }>()
);
