import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";

@Injectable({
    providedIn:'root'
})
export class TrainersService{
    private trainers: Trainer[]=[];
    private error: string="";
 
    constructor(private readonly http:HttpClient){

    }

    public fetchTrainers(): void{
        this.http.get<Trainer[]>('https://experis-assignment-api.herokuapp.com/trainers')
        .subscribe((data: Trainer[]) =>{
            this.trainers = data
        }, (error: HttpErrorResponse)=>{
            this.error=error.message;

        });
    }

    public getTrainers(): Trainer[]{
        return this.trainers
    }
    public getError(): string{
        return this.error
    }
  
}