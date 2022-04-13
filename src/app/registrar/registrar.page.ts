import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/user-model';
import { AuthService } from '../providers/auth-service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {
  userModel: UserModel;

    constructor(
        public authService: AuthService,
        public router: Router,
        ) {
        this.userModel = new UserModel();
    }

    registrar() {
      localStorage.setItem("correo",this.userModel.email);
      this.authService.createUserWithEmailAndPassword(this.userModel).then((res) => {
      this.router.navigate(['datos']);          
       
      }).catch((error) => {
        window.alert(error.message)
      }) 
    }
  }