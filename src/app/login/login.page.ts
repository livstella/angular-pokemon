import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit{


constructor( 
    private loginService:LoginService, 
    private router:Router){}

ngOnInit(): void {
    
}

  public onSubmit(loginForm: NgForm): void {
      const {trainerName}=loginForm.value;
      this.loginService.trainerName=trainerName;
      this.router.navigateByUrl("/trainer");
    
    
  }

  
}
