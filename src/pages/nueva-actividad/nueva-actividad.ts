import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NuevaActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva-actividad',
  templateUrl: 'nueva-actividad.html',
})
export class NuevaActividadPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaActividadPage');
  }

  cerrarModal() {
    this.viewCtrl.dismiss();
  }

}
