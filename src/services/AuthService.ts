import { Ilogin } from "../interfaces/Ilogin";
import { IRegister } from "../interfaces/IRegister";
import { User } from "../models/User";

// Export: 
export class AuthService {
  // User import
  private users: User[] = [];

  // register (Kayıt Ol)
  public register(data: IRegister): string {
    if (data.password !== data.confirmPassword) {
      return "Password and Confirm Password do not match";
    }
    // User ekle
    const user = new User(data.username, data.password);
    this.users.push(user);
    return `User registered successfully. ID: ${user.getId()}`;
  }

  // login (Giriş Yap)
  public login(data:Ilogin):string {
    const user = this.users.find((u) => u.getUsername() === data.username);
    // if (!user || !user.verifyPassword(data.password)) {
    if (!user) {
      return "User not found";
    }

    if (!user.verifyPassword(data.password)) {
      return "Password is incorrect";
    }
    return `Welcome ${user.getRole()} ${user.getUsername}`;
  }

  // Users (User'ları getir)
  public getUsers(): User[] {
    return this.users;
  }

  // User Sil
  public deleteUser(username:string):boolean {
    const user = this.users.findIndex((u) => u.getUsername() === username);
    if (user !== -1) {
      this.users.splice(user, 1);
      return true;
    }
    return false;
  }
}
