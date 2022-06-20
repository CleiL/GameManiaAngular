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
      //console.log("response:", response)
      //console.log("O Status Code é:", response.status)
      console.log("O tokken é:", response.body.accessToken)

      this.mensagem = "bem vindo " + response.body.user.nome
      console.log(this.mensagem)
    }, (erro) =>{
      console.log(erro)
    })
  }

}
