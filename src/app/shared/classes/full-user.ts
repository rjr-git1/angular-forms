import * as moment from 'node_modules/moment/moment';

export class FullUser {
  private id: string;
  private realname: string;
  private username: string;
  private password: string;
  private singingUpDate: string;
  private email: string;
  private continent: string;
  private gender: string;
  private upTo18: boolean;
   constructor() {
    this.id = this.uniqueId();
    this.realname = '';
    this.username = '';
    this.password = '';
    this.singingUpDate = moment().format('DD-MM-YYYY');
    this.email = '';
    this.continent = '';
    this.gender = '';
    this.upTo18 = true;
  }
   /**
  * Setters de la clase
  */
  public setRealname(realname) {
    this.realname = realname;
  }
  public setUsername(username) {
    this.username = username;
  }
  public setPassword(password) {
    this.password = password;
  }
  public setEmail(email) {
    this.email = email;
  }
  public setContinent(continent) {
    this.continent = continent;
  }
  public setGender(gender) {
    this.gender = gender;
  }
  public setUpTo18(upTo18) {
    this.upTo18 = upTo18;
  }
   /**
   * Getters de la clase
   */
  public getId() {
    return this.id;
  }
  public getRealname() {
    return this.realname;
  }
  public getUsername() {
    return this.username;
  }
  public getPassword() {
    return this.password;
  }
  public getSingingUpDate() {
    return this.singingUpDate;
  }
  public getEmail() {
    return this.email;
  }
  public getContinent() {
    return this.continent;
  }
  public getGender() {
    return this.gender;
  }
  public getUpTo18() {
    return this.upTo18;
  }
   /**
   * Generador de id único
   */
  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }

}
