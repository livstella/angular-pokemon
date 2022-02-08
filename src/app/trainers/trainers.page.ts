import { style } from "@angular/animations";
import { Component, OnInit  } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({
    selector: 'app-trainers',
    templateUrl:'./trainers.page.html', 
    styleUrls: ['./trainers.page.css']
})
export class TrainersPage implements OnInit{
    get trainerName():string{
        return this.loginService.trainerName;
    }


    constructor( private loginService: LoginService ){

    }
ngOnInit(): void {
    
}

}