import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  avaliacoes(){
    this.navCtrl.navigateForward('avaliacoes');
  }
  teste(){
    this.navCtrl.navigateForward('teste');
  }

}
