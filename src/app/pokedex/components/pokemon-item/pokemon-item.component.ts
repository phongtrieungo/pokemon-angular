import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(private _pokedexService: PokedexService) { }

  ngOnInit() {

  }

}
