export class User {
  constructor(
    private id: string,
    private name: string,
    private birthday: Date,
    private email: string,
    private photo: string,
    private password: string
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getBirthday() {
    return this.birthday;
  }

  public getPhoto() {
    return this.photo;
  }

  public getPassword(){
    return this.password
  }
}
