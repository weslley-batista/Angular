import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons = ['bulbasaur', 'ivysaur', 'venuauar', 'charmander', 'chameleon','Charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'carterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrillm', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu'];

}
