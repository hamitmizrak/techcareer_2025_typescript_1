import { User } from "../models/User";

/* 

*/

// abstract
export abstract class UserService {
  // User import
  protected users: User[] = [];

  // Gövdesiz Method
  public abstract addUser(user: User): void;

  // Gövdeli Method
  public listUsers(): User[] {
    return this.users;
  }

  // Kullanıcı Sayısı
  public countUsers(): number {
    return this.users.length;
  }

  // Kullanıcı Sil
  public clearUsers(): void {
    this.users = [];
  }
} // end of class UserService
