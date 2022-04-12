import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  nombre: string;
  codigo: number;
  correo: string;
  carrera: string;
  semestre: number;
  edad: number;
  genero: Text;
  estatura: number;
  peso: number;
  contrasena: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  guardar(value){
    const db = getDatabase();
    set(ref(db, 'users/'+this.codigo), {
      nombre: this.nombre,
      correo: this.codigo
    });
    this.router.navigate(['carrera']);    
  }
  

}
