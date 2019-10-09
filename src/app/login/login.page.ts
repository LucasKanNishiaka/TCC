import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string="";
  senha: string="";

  constructor(public afAuth:AngularFireAuth, public navCtrl: NavController) { }

  ngOnInit() {
  }
  //Recebe o e-mail e a senha do usuário da tela de login
  async login(){
    const {email, senha} = this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      this.navCtrl.navigateForward('avaliacoes');
    }
    catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("User not found");
      }
    }
  }

  register(){
    this.navCtrl.navigateForward('register');
  }
}
