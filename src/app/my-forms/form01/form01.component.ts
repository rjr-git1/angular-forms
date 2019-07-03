import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {

  nombreRecibido = '';
  passwordRecibida = '';

  placeholder = {
    username: 'teclea tu nombre',
    userpass: 'teclea tu password'
  };
  constructor() { }

  recibirDatos(nombre, password) {
    this.nombreRecibido = nombre.value;
    this.passwordRecibida = password.value;
  }
  ngOnInit() {
  }

}
