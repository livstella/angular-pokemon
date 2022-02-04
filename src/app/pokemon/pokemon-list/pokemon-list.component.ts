import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainersService } from 'src/app/services/trainers.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  constructor( private readonly trainerService: TrainersService) {
  }

  ngOnInit(): void {
    this.trainerService.fetchTrainers()
  }
get trainers(): Trainer[]{
  return this.trainerService.getTrainers()
}

}