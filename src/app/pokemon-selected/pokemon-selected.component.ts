import { Component, OnInit } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { SelectedPokemonService } from '../services/selected-pokemon.service';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.css']
})
export class PokemonSelectedComponent implements OnInit {

  constructor( private readonly SelectedPokemonService: SelectedPokemonService ) { }

  ngOnInit(): void {
  }

  get trainer(): Trainer | null{
    return this.SelectedPokemonService.trainer();
  }

}
