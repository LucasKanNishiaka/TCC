import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { async } from '@angular/core/testing';
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //Parâmetros passados na tela de registro
  nome: string=""
  email: string=""
  senha: string=""
  confirmarsenha: string=""

  constructor(
    public afAuth:AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  async register(){
    const {nome, email, senha, confirmarsenha} = this
    //Confirma se a senha a ser cadastrada está ambas corretas
    if(senha != confirmarsenha){
      this.showAlert("Houve um erro!","As senhas digitas não coincidem, tente novamente")
      return console.error("As senhas digitadas não coincidem para o registro")
    }
    
    try{
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
    console.log(res)
    this.showAlert("Sucesso!","Usuário registrado com sucesso")
    this.navCtrl.navigateForward('login')
  }
    catch(error){
      console.dir(error)
      this.showAlert("Erro!!", error.message)
    }
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
