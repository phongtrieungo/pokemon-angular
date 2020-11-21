import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/pokedex.reducer';

export const selectPokedex = createFeatureSelector('pokedex');

export const selectPokemons = createSelector(selectPokedex, (state: State) => state.pokemons);
export const selectPokemon = createSelector(selectPokedex, (state: State) => state.selectedPokemon);
