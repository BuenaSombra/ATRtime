import { Component } from '@angular/core';
import { Platform, ModalController, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NuevaActividadPage } from '../pages/nueva-actividad/nueva-actividad';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public modalCtrl: ModalController,
              //public viewCtrl : ViewController
            ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // Accion del FAB...
  nuevaActividad() {
    console.log("en nuevaActividad()");
    let modalNuevaActividad = this.modalCtrl.create(NuevaActividadPage);
    modalNuevaActividad.present();
    /*
    // código para cuando se cierre la pantalla modal de nueva actividad
    modalNuevaActividad.onDidDismiss(actividad => {
      if (actividad) {
        console.log("me devuelve la actividad " + actividad);
        this.listaActividades.push(actividad);
      }
    });
    */
  }

  cerrarModal() {
    //this.viewCtrl.dismiss();
  }

}

