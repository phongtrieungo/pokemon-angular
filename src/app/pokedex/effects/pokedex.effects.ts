import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PokedexService } from 'src/app/services/pokedex.service';
import { getAllPokemonsSuccess, getPokemonSuccess, GET_ALL_POKEMONS, GET_ALL_POKEMONS_SUCCESS, GET_POKEMON } from '../actions';

@Injectable()
export class PokedexEffect {
  constructor(
    private action$: Actions,
    private pokedexService: PokedexService
  ) { }

  loadPokedex = createEffect(() =>
    this.action$.pipe(
      ofType(GET_ALL_POKEMONS),
      mergeMap(({ all }) =>
        this.pokedexService.getAllPokemons().pipe(
          map((pokemons) => getAllPokemonsSuccess({ payload: pokemons })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadPokemon = createEffect(() =>
    this.action$.pipe(
      ofType(GET_POKEMON),
      mergeMap(({ url }) =>
        this.pokedexService.getPokemon(url).pipe(
          map((pokemon) => getPokemonSuccess({ payload: pokemon }))
          )
        )
      )
    )
}
