import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons = ['bulbasaur', 'ivysaur', 'venuauar', 'charmander','Charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'carterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrillm', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu'];

  constructor(private pokemonService: PokemonService) {}

}
