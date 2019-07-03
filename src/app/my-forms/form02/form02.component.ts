import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {

  public user: User = new User();

  public placeholder = {
    username: 'teclea tu user',
    userpass: 'teclea tu password'
  }
  recibirDatos(event, formulario){
    event.preventDefault();
    this.user.setUsername(formulario[0].value);
    this.user.setPassword(formulario[1].value);
    formulario.reset();
  }


  constructor() { }

  ngOnInit() {
  }

}
