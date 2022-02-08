import { PokemonResponse } from './../models/pokemon-catalogue.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon-catalogue.model';
import { map } from 'rxjs';
import { finalize } from 'rxjs';

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=20"

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemon: Pokemon[] = []
  private _loading: boolean = false

  // getters - Read Only
  get pokemon(): Pokemon[] {
    return this._pokemon
  }

  get loading(): boolean{
    return this._loading
  }

  // Dependency injection
  constructor(private http: HttpClient) { }

  findAllPokemon(): void {
    this._loading = true;
    this.http.get<PokemonResponse>(URL)
    .pipe(
      // RxJS Operators
      map((response: PokemonResponse) => {
        return response.results
      }),
      //finalize(() => {
        // Runs just before everything is over
      //})
    )
    .subscribe({
      next: (pokemon: Pokemon[]) => {
        this._pokemon = pokemon;
      },
      complete: () => {
        this._loading = false
      }
    });
  }
}
