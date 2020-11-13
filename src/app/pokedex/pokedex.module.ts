import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PokedexEffect } from './effects/pokedex.effects';
import { reducer } from './reducers/pokedex.reducer';
import { PokemonsComponent } from './containers/pokemons/pokemons.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';

const COMPONENTS = [
  PokemonsComponent,
  PokemonListItemComponent,
  PokemonItemComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    StoreModule.forFeature('pokedex', reducer),
    EffectsModule.forFeature([PokedexEffect])
  ]
})
export class PokedexModule { }
