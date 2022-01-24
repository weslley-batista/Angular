import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-find',
  templateUrl: './pokemon-find.component.html',
  styleUrls: ['./pokemon-find.component.css']
})
export class PokemonFindComponent implements OnInit {
  @Output() pokemonProcurado = 'POKE';
  constructor() { }

  ngOnInit(): void {
  }

}
