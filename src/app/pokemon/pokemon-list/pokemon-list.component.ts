import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { SelectedPokemonService } from 'src/app/services/selected-pokemon.service';
import { TrainersService } from 'src/app/services/trainers.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  constructor( 
    private readonly trainerService: TrainersService,
    private readonly selectedTrainerService: SelectedPokemonService,
    private loginService:LoginService, 
    ) {

  }

  ngOnInit(): void {
    this.trainerService.fetchTrainers()
  }
  //Gets the full list of trainers from the poekmon API
get trainers(): Trainer[]{
  return this.trainerService.getTrainers()
}

get trainerName(){
  return this.loginService.trainerName
}

get pokemon(){
  return this.loginService.pokemons
}

onTrainerClicked(trainer: Trainer):void{
  this.selectedTrainerService.setTrainer(trainer);
}
}