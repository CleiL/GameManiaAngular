import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados(){
    console.log(this.userModel)
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("response:", response)
      console.log("O Status Code é:", response.status)
      console.log("O tokken é:", response.body.accessToken)

      this.mensagem = "bem vindo " + response.body.user.nome
      console.log(this.mensagem)
    }, (responseerro) => {
      console.log("responseerro", responseerro)
      this.mensagem = responseerro.error
    })
  }

  onSubmit() {
    console.log("Modelo:", this.userModel)
    const lista: string[] = ["select","from","drop","or","having","group","by","insert","exec","\'","\"","*","#"]

    lista.forEach(palavra => {
      this.mensagem = "dados invalidos" + palavra
      if(this.userModel.email?.toLocaleLowerCase().includes(palavra)){

      }
    });
    this.loginService.login(this.userModel).subscribe( (response) =>{
      this.mensagem = "login sucedido";
    }, (erro) => {
      this.mensagem = erro.error;
    } )
  }

}
