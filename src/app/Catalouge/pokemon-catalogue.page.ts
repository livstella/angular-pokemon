import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-catalogue.model';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage implements OnInit {

  get pokemon(): Pokemon[] {
    return this.pokemonService.pokemon
  }

// DI
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  this.pokemonService.findAllPokemon()
  }

}
