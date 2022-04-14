import { Component, OnInit } from '@angular/core';
import {Stepcounter} from '@ionic-native/stepcounter/ngx';
import { ToastController } from '@ionic/angular';
import { StepCounterService } from 'src/app/services/step-counter.service';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.page.html',
  styleUrls: ['./carrera.page.scss'],
})
export class CarreraPage implements OnInit {
  
  

  constructor(private stepcounter: Stepcounter, public toastController: ToastController,private service: StepCounterService) {
  }
  

  ngOnInit() {
   
  }

  async iniciar() {
    let startingOffset = 0;
    this.stepcounter.start(startingOffset).then(
      onSuccess => localStorage.setItem("iniciar",onSuccess), 
      onFailure => console.log('stepcounter-start error', onFailure));

    const toast = await this.toastController.create({
      message: 'Iniciado con éxito'+localStorage.getItem("iniciar"),
      duration: 2000
     });
  
    toast.present();
  
    }


   async pasoshoy(){
    this.stepcounter.getStepCount().then(
      onSuccess => localStorage.setItem("pasoshoy",onSuccess), 
      onFailure => console.log('stepcounter-start error', onFailure));

      const toast =  await this.toastController.create({
        message: 'Pasos de hoy' + localStorage.getItem("pasoshoy"),
        duration: 2000
      });
    
      toast.present();
    
  }


  async device(){
    this.service.deviceCanCountSteps().then(
      onSuccess => console.log('stepcounter-CanCountSteps success', onSuccess), 
      onFailure => console.log('stepcounter-start error', onFailure));
  }


  async pasostotales(){
    this.service.getStepCount().then(
      historyObj => console.log('stepcounter-history success', historyObj), 
      onFailure => console.log('stepcounter-history error', onFailure));;
  }

}


