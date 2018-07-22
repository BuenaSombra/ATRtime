import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaActividadPage } from './nueva-actividad';

@NgModule({
  declarations: [
    NuevaActividadPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaActividadPage),
  ],
})
export class NuevaActividadPageModule {}
