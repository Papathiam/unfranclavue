import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-validation-detail',
  templateUrl: './validation-detail.page.html',
  styleUrls: ['./validation-detail.page.scss'],
})
export class ValidationDetailPage implements OnInit {

  constructor(private navCtrl : NavController) {}

  ngOnInit() {
  }

  goV () {
    this.navCtrl.navigateRoot('home');
  }

}
