import { Component, OnInit } from '@angular/core';
import { relativeTimeThreshold } from 'moment';
import { FullUser } from '../../shared/classes/full-user';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})
export class Form03Component implements OnInit {

  public user: FullUser = new FullUser();

  public placeholder = {
    realName: 'Teclea tu nombre y apellidos',
    userName: 'Teclea tu nombre de usuario',
    password: 'Teclea tu contraseña',
    confirmUserPass: 'Repite tu contraseña',
    userEmail: 'Teclea tu email'
  };

  public userData = {
    realName: '',
    userName: '',
    password: '',
    confirmUserPass: '',
    userEmail: '',
    continent: '0',
    gender: 'M',
    upTo18: false
  };

  public genders = {
    H: {
      label: 'Hombre',
      id: 'gender_H',
      value: 'H',
      name: 'genderOption',
      checked: false
    },
    M: {
      label: 'Mujer',
      id: 'gender_M',
      value: 'M',
      name: 'genderOption',
      checked: true
    }
  };

  public continents = [
    {
      value: '0',
      text: 'Selecciona continente',
      selected: true,
      disabled: true
    },
    {
      value: 'EU',
      text: 'Europa',
      selected: false,
      disabled: false
    },
    {
      value: 'AM',
      text: 'América',
      selected: false,
      disabled: false
    },
    {
      value: 'AF',
      text: 'África',
      selected: false,
      disabled: false
    },
    {
      value: 'AS',
      text: 'Asia',
      selected: false,
      disabled: false
    },
    {
      value: 'OC',
      text: 'Oceanía',
      selected: false,
      disabled: false
    }
  ];

  public botonDesactivado: boolean = true;

  constructor() { }

  checkButton() {
    this.botonDesactivado = (
      this.userData.realName === '' ||
      this.userData.userName === '' ||
      this.userData.confirmUserPass === '' ||
      this.userData.password !== this.userData.confirmUserPass ||
      this.userData.userEmail === '' ||
      this.userData.continent === '0' ||
      this.userData.upTo18 === false);
  }

  saveUser() {

    this.user.setRealname(this.userData.realName);
    this.user.setUsername(this.userData.userName);
    this.user.setPassword(this.userData.password);
    this.user.setEmail(this.userData.userEmail);
    this.user.setContinent(this.userData.continent);
    this.user.setGender(this.userData.gender);
    this.user.setUpTo18(this.userData.upTo18);

  }
  ngOnInit() {
  }

}
