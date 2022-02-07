import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";

@Injectable ({
    providedIn:'root'
})

export class SelectedPokemonService{
    private _trainer: Trainer | null =null;

   public setTrainer(trainer: Trainer){
    this._trainer=trainer
    }
public trainer(): Trainer|null{
        return this._trainer
    }

}