import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { parse } from 'querystring';
import { Platform } from '@ionic/angular';
import { core } from '@angular/compiler';
import { async } from 'q';
import { alertController } from '@ionic/core';

let a=document.URL.indexOf('http://localhost:8100/home');
var m = "qqw";
var b = true;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  constructor(public platform: Platform, 
              public alertController: AlertController) {
    if (this.platform.is('desktop')) {
      // App
      console.log("Web");
      m = "Viendo por Web";
   }
   if (this.platform.is('android')) {
    // App
    console.log("Android");
    m = "Viendo por Android";
 }

   
}
  async presentAlert(){
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Sustitle',
    message: m,
    buttons: ['OK']
  });
  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

  }
/*

  public alertController: AlertController

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sustitle',
      message: m,
      buttons: ['OK']
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }*/

  




/*

if (a==document.URL.indexOf('http://localhost:8100/home')) {
  b=true;
}

if (b=true){
console.log("Webbbbbbbb");
m="PorWeb";
}
else {
  console.log("Mobileeee");
m="PorMobile";
}

*/