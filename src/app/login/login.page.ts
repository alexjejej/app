import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../providers/authentication-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  codigo: number;
  contrasena: string;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  ingresar(){
    console.log("codigo: "+this.codigo+" contraseña: "+this.contrasena);
  }
  registrar(){
    
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        
          this.router.navigate(['carrera']);          
       
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
