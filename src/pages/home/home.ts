import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NuevaActividadPage } from '../nueva-actividad/nueva-actividad';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl:   NavController,
              public modalCtrl: ModalController) {

  }

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

}
