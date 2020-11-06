import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PokemonItemComponent, PokemonListComponent } from './components';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const COMPONENTS = [
  PokemonListComponent,
  PokemonItemComponent,
  PokemonDetailComponent,
];

const MODULES = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  BrowserAnimationsModule,
  BrowserModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class SharedModule {}
