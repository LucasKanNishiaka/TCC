import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AlertController } from '@ionic/angular'

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string="";
  senha: string="";

  constructor(public afAuth:AngularFireAuth, public navCtrl: NavController, public router: Router, public alert: AlertController) { }

  ngOnInit() {
  }
  //Recebe o e-mail e a senha do usuário da tela de login
  async login(){
    const {email, senha} = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      
        this.router.navigate(['/tabs'])
      }
    
    catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("User not found");
        this.showAlert("Usuário não encontrado", "Parece que o usuário inserido não consta como registrado!")
      }
    }
  }

  register(){
    this.navCtrl.navigateForward('register');
  }
  async showAlert(header: string, message: string){
    const alert = await this.alert.create(
      {
        header,
        message,
        buttons: ["OK"]
      }) 
      await alert.present()
  }
}
