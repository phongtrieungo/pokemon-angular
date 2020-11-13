export interface Pokemon {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: {};
  sprites: PokemonSprites;
  stats: any[];
  types: any[];
  weight: number;
}

export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: PokemonSpritesOther;
  versions: {}
}

export interface PokemonSpritesOther {
  dream_world: PokemonSpritesOtherDreamWorld;
  'official-artwork': PokemonSpritesOtherOfficalArtwork
}

export interface PokemonSpritesOtherDreamWorld {
  front_default: string;
  front_female: string;
}

export interface PokemonSpritesOtherOfficalArtwork {
  front_default: string
}
