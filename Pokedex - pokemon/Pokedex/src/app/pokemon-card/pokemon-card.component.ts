import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent{
  @Input() pokemon !: string;
  @Input() numero !: string | number;
  
//função responsavel por colocar os zeros na frente dos numeros (leading zeros)
leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }
  return s;
}  

  pegarImagemPokemon(){
    //o formato do numero deve ser como zeros na frente [001,011]
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }
}
