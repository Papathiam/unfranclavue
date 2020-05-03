import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 4.2,
  };

  constructor(private navCtrl : NavController) {}

  goDetail () {
    this.navCtrl.navigateRoot('detail-produit');
  }

}
