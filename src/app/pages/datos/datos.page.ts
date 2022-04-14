import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MongoDBService } from 'src/app/services/mongo-db.service';
import { IaddnewUsers } from 'src/assets/interfaces/addnewUsers';
import { AuthenticationService } from 'src/app/providers/authentication-service';

  @Component({
    selector: 'app-datos',
    templateUrl: './datos.page.html',
    styleUrls: ['./datos.page.scss'],
  })
    export class DatosPage implements OnInit {
      nombre: string;
      apellido: string;
      edad: number;
      codigo: number;
      carrera: string;
      semestre: number;
      genero: Text;
      estatura: number;
      peso: number;
      contrasena: string;

      constructor(public router: Router, private ServiceDB: MongoDBService, 
        private registrar: AuthenticationService) { }

        ngOnInit() {
            
          }

        guardar(value){
            //Datos del usuario
          console.log(localStorage.getItem("correo"));

          let user: IaddnewUsers={
            name: this.nombre,
            lastname: this.apellido,
            age: this.edad,
            email: localStorage.getItem("correo"),
            codigo: this.codigo,
            carrera: this.carrera,
            semestre: this.semestre,
            genero: this.genero,
            estatura: this.estatura,
            peso: this.peso
          }
          //Guardar en mongo DB los datos del usuario
        this.ServiceDB.addUsers(user);
        this.router.navigate(['carrera']); 
          
        }
          

        }
