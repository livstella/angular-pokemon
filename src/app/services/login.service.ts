import { Injectable } from '@angular/core';

const USER_KEY="trainerName"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _trainerName: string="";

  get trainerName():string{
    return this._trainerName;
  }

  set trainerName(trainerName: string){
    sessionStorage.setItem(USER_KEY, trainerName)
    this._trainerName=trainerName;
  }

  constructor() { 
  this._trainerName=sessionStorage.getItem(USER_KEY)||""
  }
}
