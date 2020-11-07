import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PokedexEffect } from './effects/pokedex.effects';
import { reducer } from './reducers/pokedex.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    StoreModule.forFeature('pokedex', reducer),
    EffectsModule.forFeature([PokedexEffect])
  ]
})
export class PokedexModule { }
