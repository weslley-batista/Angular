import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {//carregando os 151 primeiros pokeomon a partir da API
    const requisicao = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151'); //carrega os pokemons

    // const pokemons = requisicao.results;
    console.log(requisicao);
  }
}
