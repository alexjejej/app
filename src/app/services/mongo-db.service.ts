import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IaddnewUsers, Irespuesta } from 'src/assets/interfaces/addnewUsers';


@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  constructor(private _HTTP:HttpClient) { }

  public addUsers(newUser:IaddnewUsers): void{
    this._HTTP.post<Irespuesta>("http://localhost:8008/api/user/",
    newUser
    ).subscribe((data)=>{
      if(data.status){
        console.log("Usuario realizado con éxito"+data.msg);
      }else{console.log("Usuario NO realizado con éxito"+data.msg);}
    })
  }
}
