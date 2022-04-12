import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { getDatabase, ref, set } from 'firebase/database';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  codigo: number;
  contrasena: string;


  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  registrar(){
    const db = getDatabase();
    set(ref(db, 'users/'+this.codigo), {
      codigo: this.codigo,
      constrasena: this.contrasena
       
    });
    this.router.navigate(['datos']);    
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      // Do something here
    }).catch((error) => {
      window.alert(error.message)
    })
    /* 
          <ion-button type="submit" (click)="signUp(email, password)" expand="block">Registrar</ion-button>

    */
}


}
