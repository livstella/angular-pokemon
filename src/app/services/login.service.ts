import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

const USER_KEY = 'trainerName';
const URL = 'https://experis-assignment-api.herokuapp.com/trainers';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  
  private _trainerName: string="";

//Getter for the trainerName
  get trainerName():string{
    return this._trainerName;
  }

//Setter for the trainerName
  set trainerName(trainerName: string){
    sessionStorage.setItem(USER_KEY, trainerName)
    this._trainerName=trainerName;
  }


  private _pokemons: []=[];

  get pokemons():[]{
    return this._pokemons;
  }
  set pokemons(pokemons){
    this._pokemons=pokemons
  }



  constructor(private http: HttpClient) {
    // Get the trainer namer from session storage if available
    this._trainerName=sessionStorage.getItem(USER_KEY)||""
  }

  //Creates headers for the post request
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'floppy-vitamin-cloud',
    });
  }

  // Logs in the user by posting a new trainer to the api
  login(username: string, pokemon: Array<string>): Observable<any> {
    const trainer={ username, pokemon }
    const headers = this.createHeaders();

    return this.http.post(URL, trainer, { headers});
  }

  




  



}
