import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { SelectedPokemonService } from 'src/app/services/selected-pokemon.service';
import { TrainersService } from 'src/app/services/trainers.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  constructor(
    private readonly trainerService: TrainersService,
    private readonly selectedTrainerService: SelectedPokemonService,
    private loginService: LoginService
  ) {}

  //Fetches Trainers from the noroff pokemon api
  ngOnInit(): void {
    this.trainerService.fetchTrainers();
  }
  //Gets the full list of trainers from the trainer service
  get trainers(): Trainer[] {
    return this.trainerService.getTrainers();
  }

  //Gets the name of the trainerName of the currently logged in trainer from loginSerivce
  get trainerName() {
    return this.loginService.trainerName;
  }

  //Gets the pokemons related to the currently logged in user
  get pokemon() {
    return this.loginService.pokemons;
  }

  onTrainerClicked(trainer: Trainer): void {
    this.selectedTrainerService.setTrainer(trainer);
  }
}
