import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {

  constructor(private navCtrl : NavController) {}

  ngOnInit() {
  }

  goV () {
    this.navCtrl.navigateRoot('validation-detail');
  }

}
